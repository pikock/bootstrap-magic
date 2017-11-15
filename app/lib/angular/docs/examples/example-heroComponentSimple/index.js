(function(angular) {
  'use strict';
angular.module('heroApp', []).controller('MainCtrl', function MainCtrl() {
  this.hero = {
    name: 'Spawn'
  };
});
})(window.angular);