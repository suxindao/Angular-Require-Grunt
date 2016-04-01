/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Service: MyService', function () {

    // load the service's module
    beforeEach(module('angularGruntRequireApp.services.MyService'));

    // instantiate service
    var MyService;
    beforeEach(inject(function (_MyService_) {
      MyService = _MyService_;
    }));

    it('should do something', function () {
      expect(!!MyService).toBe(true);
    });

  });
});
