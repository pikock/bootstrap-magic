'use strict';

/* Directives */


angular.module('bootstrapVariablesEditor.directives', []).
  
    directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]).

    directive('apColorPicker',[ function() {
        
        return function(scope, element, attrs) {
            
            scope.$watch(attrs.ngModel,
                function(value){
                    /*
                    lessData.variables[scope.variable.key] = value;
                    clearTimeout(lessData.timer);
                    lessData.timer = setTimeout(
                        function () {
                            console.log('update');
                            less.modifyVars(lessData.variables);
                        }, 3000
                    );
                    */
                }
            );
            
            
            element.bind('blur', 
                function(event){
                    lessData.variables[scope.variable.key] = scope.variable.value;
                    clearTimeout(lessData.timer);
                    lessData.timer = setTimeout(
                        function () {
                            console.log('update');
                            less.modifyVars(lessData.variables);
                        }, 100
                    );
                    
                }
            );
            
        };
    }]);
