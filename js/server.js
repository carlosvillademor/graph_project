var express = require('express'),
	app = express();

app.get('/test', function(req, res) {
	console.log('test method, called received by express server on /test');
	res.send('get request to /test');
});

app.get('/', function(req, res) {
	console.log('get request to /');
	res.send('get request to /');
});

app.listen(5000);