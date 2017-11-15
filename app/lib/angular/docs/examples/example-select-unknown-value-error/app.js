(function(angular) {
  'use strict';
angular.module('staticSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.selected = null;

    $scope.forceUnknownOption = function() {
      $scope.selected = 'nonsense';
    };
 }])
 .directive('unknownValueError', function() {
   return {
     require: ['ngModel', 'select'],
     link: function(scope, element, attrs, ctrls) {
       var ngModelCtrl = ctrls[0];
       var selectCtrl = ctrls[1];

       ngModelCtrl.$validators.unknownValue = function(modelValue, viewValue) {
         if (selectCtrl.$isUnknownOptionSelected()) {
           return false;
         }

         return true;
       };
     }

   };
 });
})(window.angular);