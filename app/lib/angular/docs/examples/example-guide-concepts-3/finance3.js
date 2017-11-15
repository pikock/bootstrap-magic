(function(angular) {
  'use strict';
angular.module('finance3', [])
  .factory('currencyConverter', ['$http', function($http) {
    var currencies = ['USD', 'EUR', 'CNY'];
    var usdToForeignRates = {};

    var convert = function(amount, inCurr, outCurr) {
      return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
    };

    var refresh = function() {
      var url = 'https://api.fixer.io/latest?base=USD&symbols=' + currencies.join(",");
      return $http.get(url).then(function(response) {
        usdToForeignRates = response.data.rates;
        usdToForeignRates['USD'] = 1;
      });
    };

    refresh();

    return {
      currencies: currencies,
      convert: convert
    };
  }]);
})(window.angular);