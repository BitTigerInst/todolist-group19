var controllers = angular.module('controllers', ['services']);

controllers.controller('addItemListController', function($scope, itemsService) {
  $scope.addItem = function(item) {
    console.log("controller add item: " + item);
    itemsService.addItem(item);
  }
});

controllers.controller('itemsListController', function($scope, itemsService) {
  $scope.items = itemsService.items;
  $scope.getClass = function(item) {
    if (item.status == 'completed') {
      return 'label label-success'
    } else {
      return 'label label-danger'
    }
  }
  $scope.removeItem = function(item) {
    itemsService.removeItem(item);
  }
});

controllers.controller('itemsUncompletedController', function($scope, itemsService) {
  $scope.items = itemsService.items;
  $scope.completeItem = function(index) {
    console.log("completeItem Index: " + index);
    itemsService.completeItem(index);
  }
});

controllers.controller('itemsCompletedController', function($scope, itemsService) {
  $scope.items = itemsService.items;
  $scope.uncompleteItem = function(index) {
    console.log("uncompleteItem Index: " + index);
    itemsService.uncompletedItem(index);
  }
});

controllers.controller('changeTabController', function($scope) {
  $scope.tab = 1;
});
