(function(angular) {
  'use strict';
angular.module('cancel-update-example', [])

.controller('CancelUpdateController', ['$scope', function($scope) {
  $scope.model = {value1: '', value2: ''};

  $scope.setEmpty = function(e, value, rollback) {
    if (e.keyCode === 27) {
      e.preventDefault();
      if (rollback) {
        $scope.myForm[value].$rollbackViewValue();
      }
      $scope.model[value] = '';
    }
  };
}]);
})(window.angular);