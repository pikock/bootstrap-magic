(function(angular) {
  'use strict';
angular.module('FilterInControllerModule', []).
  controller('FilterController', ['filterFilter', function FilterController(filterFilter) {
    this.array = [
      {name: 'Tobias'},
      {name: 'Jeff'},
      {name: 'Brian'},
      {name: 'Igor'},
      {name: 'James'},
      {name: 'Brad'}
    ];
    this.filteredArray = filterFilter(this.array, 'a');
  }]);
})(window.angular);