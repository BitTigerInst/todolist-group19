  app.controller('MainCtrl', function($scope, $rootScope) {
  $scope.title = 'To Do List'; 

  $scope.tasks = $rootScope.taks;

  $scope.complete = function(task){
    //get the index
    var index = $scope.tasks.indexOf(task);
    $scope.tasks[index].completed = !$scope.tasks[index].completed;
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
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index,1);

  };

  $scope.showTasks = function(){
    firebase.database().ref('todo').on('child_added', function(data) {
      console.log(data.val());
      $scope.tasks = data.val();
      console.log($scope.tasks);


    });

  };

  
});

