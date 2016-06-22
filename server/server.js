var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//TODO: define environment variable
//TODO: setup authentication if hnecessary

app.use(express.static(__dirname + "/../public/"));

// middleware
app.use(bodyParser.json());

// TODO: setup endpoints

// TODO: accept env variable if procided
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Listen to the port', PORT);
});