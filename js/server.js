var express = require('express'),
	app = express();

app.get('/test', function() {
	console.log('test method, called received by express server on /test');
});

app.listen(3000);