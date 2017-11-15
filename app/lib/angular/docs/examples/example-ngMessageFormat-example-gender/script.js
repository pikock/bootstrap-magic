(function(angular) {
  'use strict';
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var alice   = new Person('Alice', 'female'),
    bob     = new Person('Bob', 'male'),
    ashley = new Person('Ashley', '');

angular.module('msgFmtExample', ['ngMessageFormat'])
  .controller('AppController', ['$scope', function($scope) {
      $scope.recipients = [alice, bob, ashley];
      $scope.recipient = $scope.recipients[0];
    }]);
})(window.angular);