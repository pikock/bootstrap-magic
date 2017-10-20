(function(angular) {
  'use strict';
angular.module('orderByExample4', [])
  .controller('ExampleController', ['$scope', function($scope) {
    $scope.friends = [
      {name: 'John',   favoriteLetter: 'Ä'},
      {name: 'Mary',   favoriteLetter: 'Ü'},
      {name: 'Mike',   favoriteLetter: 'Ö'},
      {name: 'Adam',   favoriteLetter: 'H'},
      {name: 'Julie',  favoriteLetter: 'Z'}
    ];

    $scope.localeSensitiveComparator = function(v1, v2) {
      // If we don't get strings, just compare by index
      if (v1.type !== 'string' || v2.type !== 'string') {
        return (v1.index < v2.index) ? -1 : 1;
      }

      // Compare strings alphabetically, taking locale into account
      return v1.value.localeCompare(v2.value);
    };
  }]);
})(window.angular);