'use strict';

describe('Component: EventcategoryComponent', function () {

  // load the controller's module
  beforeEach(module('chemclaveApp'));

  var EventcategoryComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EventcategoryComponent = $componentController('eventcategory', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
