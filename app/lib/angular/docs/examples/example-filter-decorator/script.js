(function(angular) {
  'use strict';
angular.module('filterDecorator', []).

  controller('Ctrl', ['$scope', function($scope) {
    $scope.genesis = new Date(2010, 0, 5);
    $scope.ngConf = new Date(2016, 4, 4);
  }]).

  config(['$provide', function($provide) {

    $provide.decorator('dateFilter', [
      '$delegate',
      function dateDecorator($delegate) {

        // store the original filter
        var originalFilter = $delegate;

        // return our filter
        return shortDateDefault;

        // shortDateDefault sets the format to shortDate if it is falsy
        function shortDateDefault(date, format, timezone) {
          if (!format) format = 'shortDate';

          // return the result of the original filter
          return originalFilter(date, format, timezone);
        }

      }

    ]);

  }]);
})(window.angular);