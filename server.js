require('dotenv').config();
var express = require('express');
var app = express();

var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static(__dirname + '/public'));

app.get("/", function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami", function (req, res) {
	let ipaddress = req.ip;
	let software = req.headers["user-agent"];
	let language = req.headers["accept-language"];
	res.json({ ipaddress, language, software });
});

var listener = app.listen(process.env.PORT, function () {
	console.log('Your app is listening on port ' + listener.address().port);
});
