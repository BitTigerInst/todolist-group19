var app = angular.module("todosList", []);

app.config(function(){
	console.log("config");

});

app.run(function($rootScope){
	firebase.database().ref('todo').once('value', function(snapshot) {
		console.log("run");
		$rootScope.tasks = [];

		snapshot.forEach(function(childSnapshot){

			// console.log(childSnapshot.val());

			var fetchTask = {};
			fetchTask.content = childSnapshot.val().content;
			fetchTask.date = childSnapshot.val().date;
			fetchTask.completed = childSnapshot.val().completed;

			// console.log(fetchTask.content);

			$rootScope.tasks.unshift(fetchTask);

		});
	});
});