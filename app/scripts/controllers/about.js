define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularGruntRequireApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the angularGruntRequireApp
   */
  angular.module('angularGruntRequireApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', ['$scope', 'MyService', function ($scope, aaa) {

        $scope.changePrivate = function () {
            console.log("aaaa");
            aaa.setPrivate("我改变了你的值!");
        };
      }]);
});
