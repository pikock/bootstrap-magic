(function(angular) {
  'use strict';
angular.module('heroApp').component('heroDetail', {
  templateUrl: 'heroDetail.html',
  bindings: {
    hero: '='
  }
});
})(window.angular);