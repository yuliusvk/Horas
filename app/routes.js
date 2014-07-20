// app/routes.js

// load the model

var ModelFichaje = require('./models/fichaje');

// expose the routes to our app with module.exports
module.exports = function(app) {
// api ---------------------------------------------------------------------
	// get all todos
	app.get('/api/fichaje', function(req, res) {

		// use mongoose to get all todos in the database
		ModelFichaje.find(function(err, todos) {

			// if there is an error retrieving, send the error. nothing after res.send(err) will execute
			if (err)
				res.send(err)

			res.json(todos); // return all todos in JSON format
		});
	});

	// create todo and send back all todos after creation
	app.post('/api/fichaje', function(req, res) {

		// create a todo, information comes from AJAX request from Angular
		ModelFichaje.create({
			usuario : req.body.usuario,
			fechaEntrada : req.body.fechaEntrada,
			fechaSalida : req.body.fechaSalida,
			done : false
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			ModelFichaje.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});

	});

	// delete a todo
	app.delete('/api/fichaje/:fichaje_id', function(req, res) {
		ModelFichaje.remove({
			_id : req.params.fichaje_id
		}, function(err, todo) {
			if (err)
				res.send(err);

			// get and return all the todos after you create another
			ModelFichaje.find(function(err, todos) {
				if (err)
					res.send(err)
				res.json(todos);
			});
		});
	});
	
	// application -------------------------------------------------------------
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
	});
};