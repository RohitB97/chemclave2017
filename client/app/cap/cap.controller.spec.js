'use strict';

describe('Component: CapComponent', function () {

  // load the controller's module
  beforeEach(module('chemclaveApp'));

  var CapComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    CapComponent = $componentController('cap', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
