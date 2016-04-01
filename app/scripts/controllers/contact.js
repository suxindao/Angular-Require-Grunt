define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name angularGruntRequireApp.controller:MyRouteCtrl
   * @description
   * # MyRouteCtrl
   * Controller of the angularGruntRequireApp
   */
  angular.module('angularGruntRequireApp.controllers.ContactCtrl', [])
    .controller('ContactCtrl', ['$scope', 'MyService', function ($scope, aaa) {
        $scope.myservice = aaa;
        $scope.title = '点击展开';
        $scope.text = '这里是内部的内容。';
      }]);
});
