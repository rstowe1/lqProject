const fs = require('fs');
const csv = require('fast-csv');
const connection = require('../config/connection');



headersWithProperties = [];
let myData = [];

let removedEmpty = myData



// Reads CSV file
let dataArr = [];

csv.parseFile("CD 3.csv", { headers: true, skip_blanks: true
})
	.on("data", data => {
		dataArr.push(data);
	})
	.on("end", () => {

		// extracts header from dataArr and pushes header to new headerDatas Array
		if (dataArr.length > 0) {
			let columnsIn = dataArr[0];
			let headerDatas = []
			let orginalHeaderDatas = [];
			for (let key in columnsIn) {
				headerDatas.push(key)
			}
			for (let key in columnsIn) {
				orginalHeaderDatas.push(key)
			}

			correctHeaderFormat = [];
			for (i = 0; i < headerDatas.length; i++) {
				newData = headerDatas[i].split(' ').join('_');
				correctHeaderFormat.push(newData)
			}

			//console.log('correctedheaderformat ' + correctHeaderFormat)


			//Extracts constant headers to remove from forloop and assigns approriate Sql property
			let databaseId = headerDatas[0].split(' ').join('_');
			let leaseDiscription = headerDatas[1].split(' ').join('_');

			headerDatas.shift();
			headerDatas.shift();

			newdatabaseId = databaseId + " int(25) NOT NULL"
			newleaseDiscription = leaseDiscription + " varchar(255) NULL"

			//adds property to the end of the remaining headers in array
			updatedData = [];
			for (i = 0; i < headerDatas.length; i++) {
				newData = headerDatas[i].split(' ').join('_') + ' dec(25,2) NULL';
				updatedData.push(newData)
			}
			//Puts updated headers into new Array
			console.log('HEAD ' + headersWithProperties)

			//Adds headers that were removed from array and primary key to updated array
			let key = 'PRIMARY KEY (Database_ID)'
			headersWithProperties.push(updatedData)
			headersWithProperties.unshift(newleaseDiscription)
			headersWithProperties.unshift(newdatabaseId)
			headersWithProperties.push(key)
			console.log('HEAD ' + headersWithProperties)
			//Filter for any blank elements
			let filtered = headersWithProperties.filter(function (el) {
				return el != '';
			});

			// captures all data in CSV
			let stream = fs.createReadStream("CD 3.csv")
			

			let csvStream = csv
				.parse({ ignoreEmpty: true })
				.on("data", function (data) {
					myData.push(data);
				})
				.on("end", function () {
					myData.shift();
					
									let columnHeaders = '(' + filtered + ')'

					// open the connection
					connection.connect((error) => {
						if (error) {
							console.error(error);
						} else {
							let createTable = 'CREATE TABLE `CD 3`' + columnHeaders;
							let dropTable = 'DROP TABLE IF EXISTS `CD 3`'

							console.log('CreateTable ' + createTable)
							
							let insertData = 'INSERT INTO `CD 3` ' + '(' + correctHeaderFormat + ') ' + 'VALUES ?'

							//drop table
							connection.query(dropTable, (error, response) => {
								console.log("bottom" + connection.query)
								console.log(error || response);
							});
				
							//create table
							connection.query(createTable, (error, response) => {
								console.log("bottom" + connection.query)
								console.log(error || response);
							});
						
							//insert data
							connection.query(insertData, [myData], (error, response) => {
								console.log("bottom" + connection.query)
								console.log(error || response);
							});
						}
					});
				});

			stream.pipe(csvStream);

		} else {
			console.log("No columns");
		}
	});
