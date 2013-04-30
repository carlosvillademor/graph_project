var express = require('express'),
	app = express();

app.get('/test', function(req, res) {
	console.log('test method, called received by express server on /test');
	res.send('OK');
});

app.listen(30000);