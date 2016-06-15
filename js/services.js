var services = angular.module("services", []);

services.factory('itemsService', function() {
  var items = [];
  // add new item into list
  var addItem = function(item) {
    items.push({
      'detail': item,
      'status': 'uncompleted'
    });
  };
  // remove item from list
  var removeItem = function(item) {
    var index = items.indexOf(item);
    items.splice(index, 1);
  };
  // set item completed
  var completeItem = function(item) {
    var index = items.indexOf(item);
    items[index].status ='completed';
  }
  // set item uncompleted
  var uncompletedItem = function(item) {
    var index = items.indexOf(item);
    items[index].status = 'uncompleted';
  }
  return {
    'items': items,
    'addItem': addItem,
    'removeItem': removeItem,
    'completeItem': completeItem,
    'uncompletedItem': uncompletedItem
  };
});
