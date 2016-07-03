var app = angular.module("todosList", []);

app.config(function(){

});

app.run(function($rootScope){
	firebase.database().ref('todo').on('child_added', function(data) {
      console.log(data.val());
      $rootScope.tasks = data.val();
      console.log($rootScope.tasks);
    });
});