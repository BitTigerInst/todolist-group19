app.factory('TasksStorage', function($firebase){
	var config = {
      apiKey: "AIzaSyBK9lvSZHgFZ0AUL8-UyhDhTGZSGqXG7no",
      authDomain: "todoslist-fddc5.firebaseapp.com",
      databaseURL: "https://todoslist-fddc5.firebaseio.com",
      storageBucket: "todoslist-fddc5.appspot.com",
    };

	var o = {
		tasks: []
	}

    

    firebase.initializeApp(config);
    var database = firebase.database();


});