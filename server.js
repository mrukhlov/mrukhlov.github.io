var express = require('express');
var path = require("path");
var app = express();
var port = 5000;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile('index.html');
});

app.listen(port, function () {
	console.log('Example app listening on port '+port+'!')
});