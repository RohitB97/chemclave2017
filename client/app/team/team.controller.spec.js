'use strict';

describe('Component: TeamComponent', function () {

  // load the controller's module
  beforeEach(module('chemclaveApp'));

  var TeamComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TeamComponent = $componentController('team', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
