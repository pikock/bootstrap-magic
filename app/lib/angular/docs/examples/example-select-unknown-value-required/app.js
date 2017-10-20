(function(angular) {
  'use strict';
angular.module('staticSelect', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.selected = null;

    $scope.forceUnknownOption = function() {
      $scope.selected = 'nonsense';
    };
 }])
 .directive('unknownValueRequired', function() {
   return {
     priority: 1, // This directive must run after the required directive has added its validator
     require: ['ngModel', 'select'],
     link: function(scope, element, attrs, ctrls) {
       var ngModelCtrl = ctrls[0];
       var selectCtrl = ctrls[1];

       var originalRequiredValidator = ngModelCtrl.$validators.required;

       ngModelCtrl.$validators.required = function() {
         if (attrs.required && selectCtrl.$isUnknownOptionSelected()) {
           return false;
         }

         return originalRequiredValidator.apply(this, arguments);
       };
     }
   };
 });
})(window.angular);