(function(angular) {
  'use strict';
angular.module('myServiceDecorator', []).

  controller('Ctrl', [
    '$scope',
    '$log',
    '$timeout',
    function($scope, $log, $timeout) {
      var types = ['error', 'warn', 'log', 'info' ,'debug'], i;

      for (i = 0; i < types.length; i++) {
        $log[types[i]](types[i] + ': message ' + (i + 1));
      }

      $timeout(function() {
        $log.info('info: message logged in timeout');
      });
    }
  ]).

  directive('myLog', [
    '$log',
    function($log) {
      return {
        restrict: 'E',
        template: '<ul id="myLog"><li ng-repeat="l in myLog" class="{{l.type}}">{{l.message}}</li></ul>',
        scope: {},
        compile: function() {
          return function(scope) {
            scope.myLog = $log.stack;
          };
        }
      };
    }
  ]).

  config([
    '$provide',
    function($provide) {

      $provide.decorator('$log', [
        '$delegate',
        function logDecorator($delegate) {

          var myLog = {
            warn: function(msg) {
              log(msg, 'warn');
            },
            error: function(msg) {
              log(msg, 'error');
            },
            info: function(msg) {
              log(msg, 'info');
            },
            debug: function(msg) {
              log(msg, 'debug');
            },
            log: function(msg) {
              log(msg, 'log');
            },
            stack: []
          };

          function log(msg, type) {
            myLog.stack.push({ type: type, message: msg.toString() });
            if (console && console[type]) console[type](msg);
          }

          return myLog;

        }
      ]);

    }
  ]);
})(window.angular);