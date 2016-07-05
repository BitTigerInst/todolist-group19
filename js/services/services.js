app.factory('TasksFetchService', function($q){

  var o = {
    tasks: [],
  };

  o.getInitTasks = function(){
    firebase.database().ref('todo').once('value', function(snapshot) {

    snapshot.forEach(function(childSnapshot){

        var fetchTask = {};
        fetchTask.content = childSnapshot.val().content;
        // console.log("content: " + fetchTask.content);
        fetchTask.date = childSnapshot.val().date;
        fetchTask.completed = childSnapshot.val().completed;


        o.tasks.unshift(fetchTask);
      });
    });

    return o.tasks;
  };

  o.getAddedTasks = function(){
    firebase.database().ref('todo').once('child_added', function(snapshot){
      var fetchTask = {};
      fetchTask.content = snapshot.val().content;
      fetchTask.date = snapshot.val().date;
      fetchTask.completed = snapshot.val().completed;

      // console.log("add: " + fetchTask.content);

      o.tasks.unshift(fetchTask);

    });

    return o.tasks;
  };

  

  console.log("fetch data service");

  return o;

});


app.factory('RemoveTaskService',function(){


});