define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name angularGruntRequireApp.MyService
   * @description
   * # MyService
   * Service in the angularGruntRequireApp.
   */
  angular.module('angularGruntRequireApp.services.MyService', [])
    .service('MyService', function () {
      // AngularJS will instantiate a singleton by calling "new" on this function
      var thisIsPrivate = "Private";

      this.variable = "This is public";

      this.getPrivate = function () {

        return thisIsPrivate;

      };

      this.setPrivate = function (Private) {

        thisIsPrivate = Private;

      };
    });
});
