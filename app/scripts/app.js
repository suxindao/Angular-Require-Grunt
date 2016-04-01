/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about', 'controllers/contact', 'directives/mydirective', 'services/myservice', 'directives/expanderdirective']/*deps*/, function (angular, MainCtrl, AboutCtrl, ContactCtrl, MyDirectiveDirective, MyServiceService, ExpanderDirectiveDirective)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name angularGruntRequireApp
   * @description
   * # angularGruntRequireApp
   *
   * Main module of the application.
   */
  return angular
    .module('angularGruntRequireApp', ['angularGruntRequireApp.controllers.MainCtrl', 'angularGruntRequireApp.controllers.AboutCtrl',
      'angularGruntRequireApp.controllers.ContactCtrl',
      'angularGruntRequireApp.directives.MyDirective',
      'angularGruntRequireApp.services.MyService',
      'angularGruntRequireApp.directives.ExpanderDirective',
/*angJSDeps*/'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute'])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .when('/contact', {
          templateUrl: 'views/contact.html',
          controller: 'ContactCtrl',
          controllerAs: 'contact'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
