 // js/controllers/main.js
 
 angular.module('fichajeController', [])

	.controller('mainController', function($scope, $http, Fichajes) {
        $scope.formData = {};
				
		// when landing on the page, get all todos and show them
			// use the service to get all the todos
			Fichajes.get().success(function(data) {
				$scope.fichaje = data;
			});

        // when submitting the add form, send the text to the node API
		$scope.createFichaje = function() {
			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			// people can't just hold enter to keep adding the same to-do anymore
			if (!$.isEmptyObject($scope.formData)) {

				// call the create function from our service (returns a promise object)
				Fichajes.create($scope.formData)
					// if successful creation, call our get function to get all the new todos
					.success(function(data) {
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.fichaje = data; // assign our new list of todos
						console.log(data);
					}).error(function(data) {
					console.log('Error: ' + data);
				});
			}
		};
		
		
		

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteFichaje = function(id) {
			Fichajes.delete(id)
				// if successful creation, call our get function to get all the new todos
				.success(function(data) {
					$scope.fichaje = data; // assign our new list of todos
					console.log(data);
				}).error(function(data) {
					console.log('Error: ' + data);
				});
		};

	});