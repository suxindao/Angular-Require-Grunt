/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: MyRouteCtrl', function () {

    // load the controller's module
    beforeEach(module('angularGruntRequireApp.controllers.MyRouteCtrl'));

    var MyRouteCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      MyRouteCtrl = $controller('MyRouteCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(MyRouteCtrl.awesomeThings.length).toBe(3);
    });
  });
});
