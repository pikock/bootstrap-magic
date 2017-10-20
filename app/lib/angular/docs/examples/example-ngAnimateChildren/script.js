(function(angular) {
  'use strict';
angular.module('ngAnimateChildren', ['ngAnimate'])
  .controller('MainController', function MainController() {
    this.animateChildren = false;
    this.enterElement = false;
  });
})(window.angular);