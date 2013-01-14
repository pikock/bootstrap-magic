'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('bootstrapVariablesEditor.services', []).
  value('version', '0.1').
  factory('ap_less', function() {
  
    var lessEngine = {};
    
    lessEngine.getVariables = function ($scope) {
    	var variables = {};
    	for (var i = 0; i < $scope.variables.length; i++ ) {
    		for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                variables[$scope.variables[i].data[j].key] = $scope.variables[i].data[j].value;
            }
    	}
        return variables;
    };
    
    lessEngine.getKeys = function ($scope) {
    
    	var keys = [
            'escape(@string)',
            'percentage(@number)',
            'rgb(@r, @g, @b)',
            'rgba(@r, @g, @b, @a)',
            'hsl(@hue, @saturation, @lightness)',
            'hsla(@hue, @saturation, @lightness, @alpha)',
            'hsv(@hue, @saturation, @value)',
            'hsva(@hue, @saturation, @value, @alpha)',
            'saturate(@color, 10%)',
            'desaturate(@color, 10%)',            
            'lighten(@color, 10%)',
            'darken(@color, 10%)',
            'fadein(@color, 10%)',
            'fadeout(@color, 10%)',
            'fade(@color, 50%)',
            'spin(@color, 10)',
            'mix(@color1, @color2, [@weight: 50%])',
            'greyscale(@color)',
            'contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%])',
            'multiply(@color1, @color2)',
            'screen(@color1, @color2)',            
            'overlay(@color1, @color2)',
            'softlight(@color1, @color2)',
            'hardlight(@color1, @color2)',
            'difference(@color1, @color2)',
            'exclusion(@color1, @color2)',
            'average(@color1, @color2)',
            'negation(@color1, @color2)',    	
    	];
    	
        for (var i = 0; i < $scope.variables.length; i++ ) {
            for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                keys.push($scope.variables[i].data[j].key);
            }
        }
        return keys;
    };
    
    lessEngine.getUrls = function ($scope) {
    	var keys = [
    	    "'../twitter-bootstrap/img/glyphicons-halflings.png'",
            "'../twitter-bootstrap/img/glyphicons-halflings-white.png'",
            "'../twitter-bootstrap/img/ap_icons_black_interface-orientation.png'",
            "'../twitter-bootstrap/img/ap_icons_white_interface-orientation.png'"
    	];
    	return keys;
    };
    
    lessEngine.getFonts = function ($scope) {
    	var keys = [
            "'Helvetica Neue', Helvetica, Arial",
            "Georgia",
            "'Courrier New', Consolas",
            "Impact",
            "'Lucida Console', Monaco",
            "'Palatino Linotype','Book Antiqua'",
            "'Trebuchet MS'",
            "Tahoma, Geneva",
            "Verdana, Geneva",
    	    "'Times New Roman', Times"
    	];
    	return keys;
    };
    
    lessEngine.getVariablesToString = function ($scope) {
    	var string = "" +
    	"/*\n"+
    	"* pickok, autreplanete \n"+
    	"**/\n";
        for (var i = 0; i < $scope.variables.length; i++ ) {
            string += '\n\n// ' + $scope.variables[i].name + "\n"
            for (var j = 0; j < $scope.variables[i].data.length; j++ ) {
                string += $scope.variables[i].data[j].key+': '+$scope.variables[i].data[j].value+";\n";
            }
        }
        return string;
    };
    
    return lessEngine;
});
