var directives = angular.module('directives', ['services', 'controllers']);

directives.directive('itemsList', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/items-list-tab.html',
    // replace: true;
  };
});

directives.directive('itemsUncompleted', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/items-uncompleted-tab.html',
    // replace: true;
  };
});

directives.directive('itemsCompleted', function() {
  return {
    restrict: 'E',
    templateUrl: '../templates/items-completed-tab.html',
    // replace: true;
  };
});
