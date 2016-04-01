/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Directive: expanderDirective', function () {

    // load the directive's module
    beforeEach(module('angularGruntRequireApp.directives.ExpanderDirective'));

    var element,
      scope;

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should make hidden element visible', inject(function ($compile) {
      element = angular.element('<expander-directive></expander-directive>');
      element = $compile(element)(scope);
      expect(element.text()).toBe('this is the expanderDirective directive');
    }));
  });
});
