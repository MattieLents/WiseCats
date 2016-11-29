var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var request = require('request');
var app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/../client')));

var port = process.env.PORT || 3000;

// process.env.example = stuff

app.listen(port);
console.log('Server now listening on port ' + port);

module.exports = app;

app.get('/api/quote', function(req, res) {
  var apiUrl = 'http://api.forismatic.com/api/1.0/get?method=getQuote&format=json&lang=en';
  request(apiUrl, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body)
	  	res.send(body || "ERROR QUOTES ARE ONLY SPOKEN");
	  }
	})
})

app.get('/api/image', function(req, res) {
  var imgSource = req.query.imgSource;
  console.log('req: ',req.query.imgSource)
  console.log('imgSource: ',imgSource);
  // console.log('req: ',req)
  // console.log('req arrived');
  request(imgSource, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    console.log(body)
	  	res.send(response.statusCode);
	  }
	})
})





