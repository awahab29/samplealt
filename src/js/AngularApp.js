var foods = foodStore.getState();

var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {

  $scope.data = foods;

  $scope.title = "alt with angular";

  $scope.addItem = function(){
      foodActions.addItem();
  }

}]);