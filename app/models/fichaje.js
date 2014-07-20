var mongoose = require('mongoose'); 					// mongoose for mongodb

// define model =================
	module.exports = mongoose.model('Fichaje', {
		usuario : String,
		fechaEntrada : String,
		fechaSalida : String
	});