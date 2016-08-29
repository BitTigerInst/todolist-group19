var app = angular.module("todosList", ['ngRoute']);

app.config(function($routeProvider){
	console.log("config");

	$routeProvider
		.when('/', {
			controller: 'MainCtrl',
			templateUrl: 'template/showTasks.html',
			resolve: {
				loadedTasks: function(TasksFetchService){
					return TasksFetchService.getInitTasks();
				},
			}
		})
		.when('/:status', {
			controller: 'MainCtrl',
			templateUrl: 'template/showTasks.html',
			resolve: {
				loadedTasks: function(TasksFetchService){
					return TasksFetchService.getInitTasks();
				},
			}
		})
		.otherwise({
			redirectTo: '/',
		});
});