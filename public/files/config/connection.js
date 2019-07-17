// Require mysql
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'testdb',
    multipleStatements: true,
    
});

module.exports = connection;
