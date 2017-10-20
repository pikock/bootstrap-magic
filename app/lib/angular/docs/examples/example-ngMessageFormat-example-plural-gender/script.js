(function(angular) {
  'use strict';
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}

var alice   = new Person('Alice', 'female'),
    bob     = new Person('Bob', 'male'),
    harry   = new Person('Harry Potter', 'male'),
    ashley   = new Person('Ashley', '');

angular.module('msgFmtExample', ['ngMessageFormat'])
  .controller('AppController', ['$scope', function($scope) {
      $scope.people = [alice, bob, ashley];
      $scope.recipients = [alice];
      $scope.sender = harry;
    }]);
})(window.angular);