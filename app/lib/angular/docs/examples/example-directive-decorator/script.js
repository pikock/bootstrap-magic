(function(angular) {
  'use strict';
angular.module('urlDecorator', []).

  controller('Ctrl', ['$scope', function($scope) {
    $scope.id = 3;
    $scope.warnCount = 0; // for testing
  }]).

  config(['$provide', function($provide) {

    // matchExpressions looks for interpolation markup in the directive attribute, extracts the expressions
    // from that markup (if they exist) and returns an array of those expressions
    function matchExpressions(str) {
      var exps = str.match(/{{([^}]+)}}/g);

      // if there isn't any, get out of here
      if (exps === null) return;

      exps = exps.map(function(exp) {
        var prop = exp.match(/[^{}]+/);
        return prop === null ? null : prop[0];
      });

      return exps;
    }

    // remember: directives must be selected by appending 'Directive' to the directive selector
    $provide.decorator('ngHrefDirective', [
      '$delegate',
      '$log',
      '$parse',
      function($delegate, $log, $parse) {

        // store the original link fn
        var originalLinkFn = $delegate[0].link;

        // replace the compile fn
        $delegate[0].compile = function(tElem, tAttr) {

          // store the original exp in the directive attribute for our warning message
          var originalExp = tAttr.ngHref;

          // get the interpolated expressions
          var exps = matchExpressions(originalExp);

          // create and store the getters using $parse
          var getters = exps.map(function(exp) {
            return exp && $parse(exp);
          });

          return function newLinkFn(scope, elem, attr) {
            // fire the originalLinkFn
            originalLinkFn.apply($delegate[0], arguments);

            // observe the directive attr and check the expressions
            attr.$observe('ngHref', function(val) {

              // if we have getters and getters is an array...
              if (getters && angular.isArray(getters)) {

                // loop through the getters and process them
                angular.forEach(getters, function(g, idx) {

                  // if val is truthy, then the warning won't log
                  var val = angular.isFunction(g) ? g(scope) : true;
                  if (!val) {
                    $log.warn('NgHref Warning: "' + exps[idx] + '" in the expression "' + originalExp +
                      '" is falsy!');

                    scope.warnCount++; // for testing
                  }

                });

              }

            });

          };

        };

        // get rid of the old link function since we return a link function in compile
        delete $delegate[0].link;

        // return the $delegate
        return $delegate;

      }

    ]);

  }]);
})(window.angular);