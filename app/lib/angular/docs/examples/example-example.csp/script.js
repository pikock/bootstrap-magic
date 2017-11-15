(function(angular) {
  'use strict';
angular.module('cspExample', [])
  .controller('MainController', function MainController() {
     this.counter = 0;
     this.inc = function() {
       this.counter++;
     };
     this.evil = function() {
       try {
         eval('1+2'); // eslint-disable-line no-eval
       } catch (e) {
         this.evilError = e.message;
       }
     };
   });
})(window.angular);