define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularGruntRequireApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularGruntRequireApp
   */
  angular.module('angularGruntRequireApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
