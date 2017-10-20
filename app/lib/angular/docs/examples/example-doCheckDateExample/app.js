(function(angular) {
  'use strict';
angular.module('do-check-module', [])
  .component('app', {
    template:
      'Month: <input ng-model="$ctrl.month" ng-change="$ctrl.updateDate()">' +
      'Date: {{ $ctrl.date }}' +
      '<test date="$ctrl.date"></test>',
    controller: function() {
      this.date = new Date();
      this.month = this.date.getMonth();
      this.updateDate = function() {
        this.date.setMonth(this.month);
      };
    }
  })
  .component('test', {
    bindings: { date: '<' },
    template:
      '<pre>{{ $ctrl.log | json }}</pre>',
    controller: function() {
      var previousValue;
      this.log = [];
      this.$doCheck = function() {
        var currentValue = this.date && this.date.valueOf();
        if (previousValue !== currentValue) {
          this.log.push('doCheck: date mutated: ' + this.date);
          previousValue = currentValue;
        }
      };
    }
  });
})(window.angular);