var express = require('express');
var bGround = require('fcc-express-bground');
var app = express();

bGround.log("Hello World");
console.log("Hello World");

app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));


module.exports = app;