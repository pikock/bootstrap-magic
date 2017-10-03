'use strict';

/* Filters */

angular.module('bootstrapVariablesEditor.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).
  filter('cssName', function() {
    return function(input) {
      return input.substring(1);
    }
  });
