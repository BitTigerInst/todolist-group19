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
	console.log("config");


	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'template/showTasks.html',
			resolve: {
				
			}
		})
		.when('/:status', {
			controller: 'MainCtrl',
			templateUrl: 'template/showTasks.html',
		})
		.otherwise({
			redirectTo: '/',
		});

});