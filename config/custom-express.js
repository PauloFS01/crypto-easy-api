var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
	var app = express(); 	
 	//add body Parser middleware
	app.use(bodyParser.json());

	// ajusts to the Same Origin Policy 
	app.use(function (req, res, next){
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
		res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');
		res.setHeader('Access-Control-Allow-Credentials', true);
		next();
	})

	consign({cwd: 'app'})
		.include('models')
		.then('helpers/expiredAt.js')
		.then('helpers')
		.then('infra/redisClient.js')
		.then('infra')
		.then('services')
	    .then('api')
	    .then('routes')
	    .into(app);	

	return app;
}