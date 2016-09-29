'use strict';

describe('Component: AdminportalComponent', function () {

  // load the controller's module
  beforeEach(module('chemclaveApp'));

  var AdminportalComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdminportalComponent = $componentController('adminportal', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
