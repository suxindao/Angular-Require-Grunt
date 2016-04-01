define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc directive
   * @name angularGruntRequireApp.directive:myDirective
   * @description
   * # myDirective
   */
  angular.module('angularGruntRequireApp.directives.MyDirective', [])
    .directive('hello', function () {
      return {
        restrict: 'E',
        template: '<div>Hi There! <span ng-transclude></span></div>',
        replace: true,
        transclude: true
      };
    });
});
