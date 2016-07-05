app.directive('showTasks', function(){
	console.log("directive");
	return{
		restrict: 'E',
		templateUrl: 'template/showTasks.html',
	};
});