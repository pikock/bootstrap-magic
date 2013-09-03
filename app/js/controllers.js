/* Controllers */

<<<<<<< HEAD
function LessCtrl($scope, $http, ap_less) {

    $scope.variables = {};
    var initLessVariables = function () {
        $http.get('less/variables.json').success(function(data) {
            $scope.variables = data;
            setTimeout(function() {
                $scope.applyLess();
            },0);
            setTimeout(function() {
=======
function LessCtrl($scope, $http, ap_less, $timeout) {

    $scope.variables = {};
    $scope.fonts = {};
    var initLessVariables = function () {
        $http.get('less/variables.json').success(function(data) {
            $scope.variables = data;
            $timeout(function() {
                $scope.applyLess(false);
            },0);
            $timeout(function() {
>>>>>>> master
                // move into a service
                var keys = ap_less.getKeys($scope);
                var icons = ap_less.getUrls();
                var font = ap_less.getFonts();
<<<<<<< HEAD
                setTimeout(function() {
=======
                $timeout(function() {
>>>>>>> master
                    var $colorpicker = $('.colorpicker');
                    $colorpicker.colorpicker().on('changeColor', function(ev){
                        var scope = angular.element(this).scope();
                        scope.variable.value = ev.color.toHex();
<<<<<<< HEAD
=======

                        if ($scope.autoapplyless){
                            $scope.autoApplyLess();
                        }
>>>>>>> master
                    });
                    
                    $('.lessVariable').each( function(index){
                        var scope = angular.element(this).scope();
<<<<<<< HEAD
                        console.log();
=======
>>>>>>> master
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
<<<<<<< HEAD
            var vars = ap_less.getVariables($scope);
            less.modifyVars(vars);
        }
    };
    
    $scope.applyLess = function (event) {
        var vars = ap_less.getVariables($scope);
        less.modifyVars(vars);
=======
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
>>>>>>> master
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
<<<<<<< HEAD
        //console.log('routeChangeStart');
=======
>>>>>>> master
        $scope.isViewLoading = true;
    });
    
    $scope.$on('$routeChangeSuccess', function() {
<<<<<<< HEAD
        //console.log('routeChangeSuccess');
=======
>>>>>>> master
        $scope.isViewLoading = false;
    });
    
    $scope.getGroupUrl = function() {
        return 'preview/' + angular.lowercase(this.group.name).replace(/[^\w ]+/g,'').replace(/ +/g,'-') + '.html';
    };
    
}
<<<<<<< HEAD
LessCtrl.$inject = ['$scope', '$http', 'ap_less'];
=======
LessCtrl.$inject = ['$scope', '$http', 'ap_less', '$timeout'];

function PageCtrl($scope, $http, ap_less) {
    }
PageCtrl.$inject = ['$scope', '$http', 'ap_less'];
>>>>>>> master
