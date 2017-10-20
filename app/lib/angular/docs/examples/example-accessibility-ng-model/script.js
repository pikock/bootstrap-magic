(function(angular) {
  'use strict';
angular.
  module('ngAria_ngModelExample', ['ngAria']).
  directive('customCheckbox', customCheckboxDirective).
  directive('showAttrs', showAttrsDirective);

function customCheckboxDirective() {
  return {
    restrict: 'E',
    require: 'ngModel',
    transclude: true,
    template:
        '<span class="icon" aria-hidden="true"></span> ' +
        '<ng-transclude></ng-transclude>',
    link: function(scope, elem, attrs, ctrl) {
      // Overwrite necessary `NgModelController` methods
      ctrl.$isEmpty = isEmpty;
      ctrl.$render = render;

      // Bind to events
      elem.on('click', function(event) {
        event.preventDefault();
        scope.$apply(toggleCheckbox);
      });
      elem.on('keypress', function(event) {
        event.preventDefault();
        if (event.keyCode === 32 || event.keyCode === 13) {
          scope.$apply(toggleCheckbox);
        }
      });

      // Helpers
      function isEmpty(value) {
        return !value;
      }
      
      function render() {
        elem[ctrl.$viewValue ? 'addClass' : 'removeClass']('checked');
      }
 
      function toggleCheckbox() {
        ctrl.$setViewValue(!ctrl.$viewValue);
        ctrl.$render();
      }
    }
  };
}

function showAttrsDirective($timeout) {
  return function(scope, elem, attrs) {
    var pre = document.createElement('pre');
    elem.after(pre);

    scope.$watchCollection(function() {
      return Array.prototype.slice.call(elem[0].attributes).reduce(function(aggr, attr) {
        if (attr.name !== attrs.$attr.showAttrs) aggr[attr.name] = attr.value;
        return aggr;
      }, {});
    }, function(newValues) {
      $timeout(function() {
        pre.textContent = angular.toJson(newValues, 2);
      });
    });
  };
}
})(window.angular);