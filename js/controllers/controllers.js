app.controller('MainCtrl', function($scope) {
  $scope.title = 'To Do List'; 

  $scope.tasks = [
  {
  	content: 'task 1',
    date: new Date().getTime(),
    completed: false,
  },
  {
  	content: 'task 2',
    date: new Date().getTime(),
    completed: false,
  },
  {
    content: 'task 3',
    date: new Date().getTime(),
    completed: false,
  },

  ];

  $scope.complete = function(task){
    //get the index
    var index = $scope.tasks.indexOf(task);
    $scope.tasks[index].completed = !$scope.tasks[index].completed;
  };

  $scope.addTask = function(task){

    var inputTask = {};
    inputTask.content = task;
    inputTask.date = new Date();
    inputTask.completed = false;

    $scope.tasks.unshift(inputTask);

  };

  $scope.removeTask = function(task) {
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index,1);

  };

  
  
});

