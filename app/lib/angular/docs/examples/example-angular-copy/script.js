(function(angular) {
  'use strict';
// Module: copyExample
angular.
  module('copyExample', []).
  controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};

    $scope.reset = function() {
      // Example with 1 argument
      $scope.user = angular.copy($scope.master);
    };

    $scope.update = function(user) {
      // Example with 2 arguments
      angular.copy(user, $scope.master);
    };

    $scope.reset();
  }]);
})(window.angular);