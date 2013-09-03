'use strict';

/* Directives */


angular.module('bootstrapVariablesEditor.directives', []).
  
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]).

    directive('apColorPicker',[ function() {
        return {
            restrict: 'C',
            link: function(scope, element, attrs) {
                var inputChange;
                
                element.bind('change',  function () {
                	if (scope.variable.value.charAt(0) == '#') {
                        element.colorpicker('setValue', scope.variable.value);
                    }
                	clearTimeout(inputChange);
                    inputChange = setTimeout(
                        function () {
                            scope.$apply(attrs.colorpickerapply);
                        }, 400
                    );
                });
                
            }
        };
    }]);
