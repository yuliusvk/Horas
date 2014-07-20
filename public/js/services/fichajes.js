 // js/services/fichajes.js
angular.module('fichajeService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Fichajes', function($http) {
		return {
			get : function() {
				return $http.get('/api/fichaje');
			},
			create : function(fichajeData) {
				return $http.post('/api/fichaje', fichajeData);
			},
			delete : function(id) {
				return $http.delete('/api/fichaje/' + id);
			}
		}
	});