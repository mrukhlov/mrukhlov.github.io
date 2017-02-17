var express = require('express');
var path = require("path");
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
	res.sendFile('index.html');
});

app.listen(5000, function () {
	console.log('Example app listening on port 5000!')
});