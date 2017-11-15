(function(angular) {
  'use strict';
angular.module('switchExample', ['ngAnimate'])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.items = ['settings', 'home', 'options', 'other'];
    $scope.selection = $scope.items[0];
  }]);
})(window.angular);