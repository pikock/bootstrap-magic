/* Controllers */

function LessCtrl($scope, $http, ap_less, $timeout) {

    $scope.variables = {};
    $scope.fonts = {};
    var initLessVariables = function () {
        $http.get('less/variables.json').success(function(data) {

            if (window.localStorage) {
                for (var key in window.localStorage) {
                    var url = "http://pikock.github.io/bootstrap-magic/twitter-bootstrap/less/bootstrap.less:timestamp"
                    if (key == url) {
                        delete window.localStorage[key];
                    };
                  }
            };
            
            $scope.variables = data;
            $timeout(function() {
                $scope.applyLess(false);
            },0);
            $timeout(function() {
                // move into a service
                var keys = ap_less.getKeys($scope);
                var icons = ap_less.getUrls();
                var font = ap_less.getFonts();
                $timeout(function() {
                    var $colorpicker = $('.colorpicker');
                    $colorpicker.colorpicker().on('changeColor', function(ev){
                        var scope = angular.element(this).scope();
                        scope.variable.value = ev.color.toHex();

                        $timeout(function() {
                            if ($scope.autoapplyless){
                                $scope.autoApplyLess();
                            }
                        }, 500);
                        
                    });
                    
                    $('.lessVariable').each( function(index){
                        var scope = angular.element(this).scope();
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
            var vars = ap_less.getVariables($scope, false);
            less.modifyVars(vars.variables);

            WebFont.load({
              google: {
                families: vars.fonts
              }
            });
        }
    };
    
    $scope.applyLess = function (applyAll) {
        var vars = ap_less.getVariables($scope, applyAll);
        less.modifyVars(vars.variables);

        WebFont.load({
          google: {
            families: vars.fonts
          }
        });
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
        $scope.isViewLoading = true;
    });
    
    $scope.$on('$routeChangeSuccess', function() {
        $scope.isViewLoading = false;
    });
    
    $scope.getGroupUrl = function() {
        return 'preview/' + angular.lowercase(this.group.name).replace(/[^\w ]+/g,'').replace(/ +/g,'-') + '.html';
    };
    
}
LessCtrl.$inject = ['$scope', '$http', 'ap_less', '$timeout'];

function PageCtrl($scope, $http, ap_less) {
    }
PageCtrl.$inject = ['$scope', '$http', 'ap_less'];