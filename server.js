var express = require('express'),
	bp = require('body-parser'),
	path = require('path'),
	root = __dirname,
	app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './bower_components')));
app.use(bp.json());

var http = require("http");
setInterval(function() {
    http.get("https://andrew-balberchak.herokuapp.com");
}, 1800000); // every 5 minutes (300000)


// Required for Heroku to enable proper refresh with #! removal
app.get('*', function(req, res) {
  res.sendfile('./client/index.html')
})

// app.listen(8000, function() {});
app.listen(PORT, function () {
	console.log("Express is running on port " + PORT);
});