'use strict'

angular
  .module('bootstrapVariablesEditor', [
    'bootstrapVariablesEditor.filters',
    'bootstrapVariablesEditor.services',
    'bootstrapVariablesEditor.directives',
    'ngRoute',
    'ui.codemirror'
  ])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!')
    $routeProvider.when('/editor', { templateUrl: 'partials/editor.html', controller: SassCtrl })
    $routeProvider.when('/create-website-pikock', { templateUrl: 'partials/create-website-pikock.html', controller: PageCtrl })
    $routeProvider.when('/submit-theme', { templateUrl: 'partials/submit-theme.html', controller: PageCtrl })
    $routeProvider.otherwise({ redirectTo: '/editor' })
  })
