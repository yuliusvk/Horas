// server.js
//comentario de prueba para verlo en el pc sobremesa

	// set up ========================
	var express  = require('express');
	var morgan         = require('morgan');
	var bodyParser     = require('body-parser');
	var mongoose = require('mongoose'); 					// mongoose for mongodb
	var port  	 = process.env.PORT || 8080; 				// set the port
	var database = require('./config/database');
	var app      = express(); 								// create our app w/ express
	// configuration =================
	
	
	mongoose.connect(database.url); 	// connect to mongoDB database on modulus.io

	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(morgan('dev')); 					// log every request to the console
	//app.use(bodyParser()); 						// pull information from html in POST	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	
	// routes ======================================================================
	require('./app/routes.js')(app);

	
	// listen (start app with node server.js) ======================================
	app.listen(port);
	console.log("App listening on port 8080");
