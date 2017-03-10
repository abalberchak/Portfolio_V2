var express = require('express'),
	bp = require('body-parser'),
	path = require('path'),
	root = __dirname,
	app = express();

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json())

app.listen(8000, function() {});