(function(angular) {
  'use strict';
angular.module('orderByExample3', [])
  .controller('ExampleController', ['$scope', 'orderByFilter', function($scope, orderBy) {
    var friends = [
      {name: 'John',   phone: '555-1212',  age: 10},
      {name: 'Mary',   phone: '555-9876',  age: 19},
      {name: 'Mike',   phone: '555-4321',  age: 21},
      {name: 'Adam',   phone: '555-5678',  age: 35},
      {name: 'Julie',  phone: '555-8765',  age: 29}
    ];

    $scope.propertyName = 'age';
    $scope.reverse = true;
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

    $scope.sortBy = function(propertyName) {
      $scope.reverse = (propertyName !== null && $scope.propertyName === propertyName)
          ? !$scope.reverse : false;
      $scope.propertyName = propertyName;
      $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
    };
  }]);
})(window.angular);