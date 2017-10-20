(function(angular) {
  'use strict';
angular.module('mySceApp', ['ngSanitize'])
  .controller('AppController', ['$http', '$templateCache', '$sce',
    function AppController($http, $templateCache, $sce) {
      var self = this;
      $http.get('test_data.json', {cache: $templateCache}).then(function(response) {
        self.userComments = response.data;
      });
      self.explicitlyTrustedHtml = $sce.trustAsHtml(
          '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
          'sanitization.&quot;">Hover over this text.</span>');
    }]);
})(window.angular);