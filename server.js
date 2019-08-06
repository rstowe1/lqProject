var express = require('express');
var app = express();
var multer = require('multer');
var cors = require('cors');


var app = express();
app.use(helmet());
app.use(cors());

app.use((req, res, next) =>{
  res.setHeader('Access-Control-Allow-Origin', 'https://ryan-test.com');
  next()
});

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './src')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
});

var upload = multer({ storage: storage }).single('file');


app.post('/upload',function(req, res) {

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    return res.status(200).send(req.file)

  })

});


app.listen(8000, function() {

  console.log('App running on port 8000');

});
//
// // Dependencies
// // =============================================================
// var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
// var upload = require('express-fileupload');
const http = require('http');

var populateDb1 = require('./src/upload');
var populateDb2 = require('./src/upload2');
var populateDb3 = require('./src/upload3');
var populateLqDb1 = require('./src/upload_LQ1');
var populateLqDb2 = require('./src/upload_LQ2');
var populateLqDb3 = require('./src/upload_LQ3');
let exportResultMonth1 = require('./export/queryMonth1');
let exportResultMonth2 = require('./export/queryMonth2');
let exportResultMonth3 = require('./export/queryMonth3');
//
//
// // Sets up the Express App
// // =============================================================
// // var app = express();
// // var PORT = 8000;
//
//
// // app.use(upload());
//
// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './public/style.css')));

// // Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./src/App.js"));
});

app.post('/populateLqDb1', (req, res) => {
  populateLqDb1();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/populateLqDb2', (req, res) => {
  populateLqDb2();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/populateLqDb3', (req, res) => {
  populateLqDb3();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/populateDb1', (req, res) => {
  populateDb1();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/populateDb2', (req, res) => {
  populateDb2();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/populateDb3', (req, res) => {
  populateDb3();
  //alert ('Data Uploaded')
  res.redirect('/');
});


app.post('/exportResultMonth1', (req, res) => {
  exportResultMonth1();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/exportResultMonth2', (req, res) => {
  exportResultMonth2();
  //alert ('Data Uploaded')
  res.redirect('/');
});

app.post('/exportResultMonth3', (req, res) => {
  exportResultMonth3();
  //alert ('Data Uploaded')
  res.redirect('/');
});

//
// app.post('/upload', function (req, res) {
//   console.log(req.files);
//   if (req.files.upfile) {
//     var file = req.files.upfile,
//       name = file.name,
//       type = file.mimetype;
//     var uploadpath = __dirname + '/' + name;
//     file.mv(uploadpath, function (err) {
//       if (err) {
//         console.log("File Upload Failed", name, err);
//         res.send("Error Occured!")
//       } else {
//         console.log("File Uploaded", name);
//         res.redirect('/');
//       }
//     });
//   } else {
//     res.send("No File selected !");
//     res.end();
//   }
//   ;
// })
//
// // Routes
// // =============================================================
//
// // Starts the server to begin listening
// // =============================================================
// app.listen(PORT, function () {
//   console.log("App listening on PORT " + PORT);
// });
