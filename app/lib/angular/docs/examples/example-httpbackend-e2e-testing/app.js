(function(angular) {
  'use strict';
var myApp = angular.module('myApp', []);

myApp.controller('MainCtrl', function MainCtrl($http) {
  var ctrl = this;

  ctrl.phones = [];
  ctrl.newPhone = {
    name: ''
  };

  ctrl.getPhones = function() {
    $http.get('/phones').then(function(response) {
      ctrl.phones = response.data;
    });
  };

  ctrl.addPhone = function(phone) {
    $http.post('/phones', phone).then(function() {
      ctrl.newPhone = {name: ''};
      return ctrl.getPhones();
    });
  };

  ctrl.getPhones();
});
})(window.angular);