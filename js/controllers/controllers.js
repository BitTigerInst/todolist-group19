  app.controller('MainCtrl', function($scope, $rootScope) {
  $scope.title = 'To Do List'; 
  console.log("MainCtrl");

  // var tasks = $rootScope.tasks;

  $scope.complete = function(task){
    //get the index
    var index = $rootScope.tasks.indexOf(task);
    $rootScope.tasks[index].completed = !$scope.tasks[index].completed;
  };

  $scope.addTask = function(task){

    var inputTask = {};
    inputTask.content = task;
    inputTask.date = new Date().getTime();
    inputTask.completed = false;

    // $scope.tasks.unshift(inputTask);

    firebase.database().ref('todo').push({
      content: inputTask.content,
      date: inputTask.date,
      completed: inputTask.completed,
    });

  };

  $scope.removeTask = function(task) {
    var index = $rootScope.tasks.indexOf(task);
    $rootScope.tasks.splice(index,1);

  };

  $scope.showTasks = function(){
    console.log($rootScope.tasks);
  };

  
});

