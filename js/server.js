var express = require('express'),
	app = express(),
	mu = require('mu2'),
	util = require('util');

mu.root = __dirname;

app.get('/test', function(req, res) {
	console.log('test method, called received by express server on /test');
	res.send('Test page');
});

app.get('/channel.html', function(req, res){
	console.log('get request to /channel.html');
	var channelPage = mu.compileAndRender('../templates/channel.html', {});
	console.log('channelPage is', channelPage);
	util.pump(channelPage, res);
});

app.get('/', function(req, res) {
	console.log('get request to /');
	var homePage = mu.compileAndRender('../templates/home.html', {});
	console.log('homePage is', homePage);
	util.pump(homePage, res);
});

app.listen(process.env.PORT || 5000);
