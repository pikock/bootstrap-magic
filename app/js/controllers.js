/* Controllers */

function LessCtrl($scope, $http, ap_less) {

    $scope.variables = {};
    var initLessVariables = function () {
        $http.get('less/variables.json').success(function(data) {
            $scope.variables = data;
            setTimeout(function() {
                $scope.applyLess();
            },0);
            setTimeout(function() {
                // move into a service
                var keys = ap_less.getKeys($scope);
                var icons = ap_less.getUrls();
                var font = ap_less.getFonts();
                setTimeout(function() {
                    var $colorpicker = $('.colorpicker');
                    $colorpicker.colorpicker().on('changeColor', function(ev){
                        var scope = angular.element(this).scope();
                        scope.variable.value = ev.color.toHex();
                    });
                    
                    $('.lessVariable').each( function(index){
                        var scope = angular.element(this).scope();
                        console.log();
                        switch ( scope.variable.type ) {
                        	case 'icons':
                        		var src = icons;
                        		break;
                        		
                        	case 'font':
                        		var src = font;
                        		break;	
                        		
                        	case 'color':
                        	default:
                        	    var src = keys;
                        	    
                        }
                        $(this).typeahead({ 
                            source: src,
                            updater: function (item) {
                                scope.variable.value = item;
                                return item;
                            }
                        });
                    });
                    
                },0); 
            },0);
        });
    };
    initLessVariables();
    
    $scope.autoapplyless = false;
    
    $scope.autoApplyLess = function (event) {
        if ($scope.autoapplyless){
            var vars = ap_less.getVariables($scope);
            less.modifyVars(vars);
        }
    };
    
    $scope.applyLess = function (event) {
        var vars = ap_less.getVariables($scope);
        less.modifyVars(vars);
    };
    
    $scope.colorpicker = function(type) {
    	return (type == 'color') ? true : false;
    }
    
    $scope.color = function(type, value) {
    	return (type == 'color' && /^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(value) ) ? value : '#ffffff';
    }
    
    $scope.$on('applyLess', function() {
        $scope.applyLess();
    });
    
    $scope.setIsViewLoading = function(val) {
        $scope.isViewLoading = val;
    };
    
    $scope.minified = false;
    
    
    $scope.saveCSS = function() {
        ap_less.saveCSS($scope);
    }
    
    $scope.saveLessVariables = function () {
    	ap_less.saveLessVar(ap_less.getVariablesToString($scope));
    };
    
    $scope.resetLessVariables = function () {
    	initLessVariables();
    	setTimeout(function() {
            $scope.applyLess();
        },0);
    };
    
    $scope.importLessVariables= function (string) {
        $scope = ap_less.importVariables($scope, string);
        $scope.applyLess();
    };
    
    $scope.upDateValue = function () {
        
    };
    
    $scope.isViewLoading = false;
    
    $scope.$on('$routeChangeStart', function() {
        //console.log('routeChangeStart');
        $scope.isViewLoading = true;
    });
    
    $scope.$on('$routeChangeSuccess', function() {
        //console.log('routeChangeSuccess');
        $scope.isViewLoading = false;
    });
    
    $scope.getGroupUrl = function() {
        return 'preview/' + angular.lowercase(this.group.name).replace(/[^\w ]+/g,'').replace(/ +/g,'-') + '.html';
    };
    
}
LessCtrl.$inject = ['$scope', '$http', 'ap_less'];