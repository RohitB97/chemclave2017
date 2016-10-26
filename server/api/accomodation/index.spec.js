'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var accomodationCtrlStub = {
  index: 'accomodationCtrl.index',
  show: 'accomodationCtrl.show',
  create: 'accomodationCtrl.create',
  update: 'accomodationCtrl.update',
  destroy: 'accomodationCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var accomodationIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './accomodation.controller': accomodationCtrlStub
});

describe('Accomodation API Router:', function() {

  it('should return an express router instance', function() {
    expect(accomodationIndex).to.equal(routerStub);
  });

  describe('GET /api/accomodations', function() {

    it('should route to accomodation.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'accomodationCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/accomodations/:id', function() {

    it('should route to accomodation.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'accomodationCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/accomodations', function() {

    it('should route to accomodation.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'accomodationCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/accomodations/:id', function() {

    it('should route to accomodation.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'accomodationCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/accomodations/:id', function() {

    it('should route to accomodation.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'accomodationCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/accomodations/:id', function() {

    it('should route to accomodation.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'accomodationCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
