'use strict';

describe('Component: AboutusComponent', function () {

  // load the controller's module
  beforeEach(module('chemclaveApp'));

  var AboutusComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AboutusComponent = $componentController('aboutus', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
