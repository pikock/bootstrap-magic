'use strict'

window.angular
  .module('bootstrapVariablesEditor', [
    'bootstrapVariablesEditor.filters',
    'bootstrapVariablesEditor.services',
    'bootstrapVariablesEditor.directives',
    'ngRoute',
    'ngSanitize',
    'ui.codemirror'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/editor', {
      templateUrl: 'partials/editor.html',
      controller: window.SassCtrl
    })
    $routeProvider.otherwise({ redirectTo: '/editor' })
  })
