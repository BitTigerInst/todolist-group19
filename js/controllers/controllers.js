  app.controller('MainCtrl', function($scope, TasksFetchService, $routeParams) {
  $scope.title = 'To Do List'; 
  console.log("MainCtrl");

  $scope.initTasks = function(){
    $scope.tasks = TasksFetchService.getInitTasks(); 
  };
  

  $scope.status = '';

  // $scope.$on('$routeChangeSucces', function(){
  //   $scope.status = $routeParams.status || '';
  //   console.log($scope.status);
  //   $scope.statusFilter = ($scope.status === 'active') ? 
  //     { completed: false } : ($scope.status === 'completed') ? 
  //     { compelted: true } : {};
  // });

  $scope.changeStatus = function(changedStatus){
    $scope.status = changedStatus;
    console.log("changed : "+$scope.status);
    $scope.statusFilter = ($scope.status === 'active') ? 
      { completed: false } : ($scope.status === 'completed') ? 
      { completed: true } : {};

  };

  $scope.complete = function(task){
    //get the index
    var index = $scope.tasks.indexOf(task);
    $scope.tasks[index].completed = !$scope.tasks[index].completed;

    var updatedTask = {
      completed: $scope.tasks[index].completed,
    };

    //get the key of this task
    firebase.database().ref('/todo/').orderByChild("content").equalTo(task.content).on("child_added", function(snapshot) {

      console.log("therethere: " + snapshot.key);

      firebase.database().ref('/todo/').child(snapshot.key).update(updatedTask);

    });

  };


  $scope.addTask = function(task){

    var inputTask = {};
    inputTask.content = task;
    inputTask.date = new Date().getTime();
    inputTask.completed = false;

    // $scope.tasks.unshift(inputTask);

    firebase.database().ref('/todo/').push({
      
        content: inputTask.content,
        date: inputTask.date,
        completed: inputTask.completed,
      
    });

    $scope.tasks = TasksFetchService.getAddedTasks();

    $scope.inputTask = null;


  };

  $scope.removeTask = function(task) {
    var index = $scope.tasks.indexOf(task);
    $scope.tasks.splice(index,1);

    var content = task.content;
    console.log(content);

    firebase.database().ref('/todo/').orderByChild("content").equalTo(task.content).on("child_added", function(snapshot) {

      console.log("herehere: " + snapshot.key);


      firebase.database().ref('/todo/').child(snapshot.key).remove();

    });

    
  };

  $scope.showTasks = function(){
    console.log($scope.tasks);
  };

  
});

