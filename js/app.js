var app = angular.module("todosList", ['ngRoute']);

app.run(function($rootScope){
	// firebase.database().ref('todo').on('value', function(snapshot) {
		console.log("run");
	// 	$rootScope.tasks = [];

	// 	snapshot.forEach(function(childSnapshot){

	// 		// console.log(childSnapshot.val());

	// 		var fetchTask = {};
	// 		fetchTask.content = childSnapshot.val().content;
	// 		fetchTask.date = childSnapshot.val().date;
	// 		fetchTask.completed = childSnapshot.val().completed;

	// 		// console.log(fetchTask.content);

	// 		$rootScope.tasks.unshift(fetchTask);

	// 	});
	// });
});

app.config(function($routeProvider){
	'use strict';
	console.log("config");

	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'index.html',
			resolve: {
				store: function (TasksFetchService) {
					// Get the correct module (API or localStorage).
					return TasksFetchService.then(function (module) {
						module.get(); // Fetch the todo records in the background.
						return module;
					});
				}
			}
		})
		.when('/:status', {
			controller: 'MainCtrl',
			templateUrl: 'index.html',
		})
		.otherwise({
			redirectTo: '/',
		});

});