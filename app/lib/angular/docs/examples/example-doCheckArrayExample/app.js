(function(angular) {
  'use strict';
angular.module('do-check-module', [])
  .component('test', {
    bindings: { items: '<' },
    template:
      '<pre>{{ $ctrl.log | json }}</pre>',
    controller: function() {
      this.log = [];

      this.$doCheck = function() {
        if (this.items_ref !== this.items) {
          this.log.push('doCheck: items changed');
          this.items_ref = this.items;
        }
        if (!angular.equals(this.items_clone, this.items)) {
          this.log.push('doCheck: items mutated');
          this.items_clone = angular.copy(this.items);
        }
      };
    }
  });
})(window.angular);