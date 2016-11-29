var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client')));

var port = process.env.PORT || 3000;

// process.env.example = stuff

app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;