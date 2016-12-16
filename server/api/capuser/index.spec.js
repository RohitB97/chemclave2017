'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var capuserCtrlStub = {
  index: 'capuserCtrl.index',
  show: 'capuserCtrl.show',
  create: 'capuserCtrl.create',
  update: 'capuserCtrl.update',
  destroy: 'capuserCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var capuserIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './capuser.controller': capuserCtrlStub
});

describe('Capuser API Router:', function() {

  it('should return an express router instance', function() {
    expect(capuserIndex).to.equal(routerStub);
  });

  describe('GET /api/capusers', function() {

    it('should route to capuser.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'capuserCtrl.index')
        ).to.have.been.calledOnce;
    });

  });

  describe('GET /api/capusers/:id', function() {

    it('should route to capuser.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'capuserCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/capusers', function() {

    it('should route to capuser.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'capuserCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/capusers/:id', function() {

    it('should route to capuser.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'capuserCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/capusers/:id', function() {

    it('should route to capuser.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'capuserCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/capusers/:id', function() {

    it('should route to capuser.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'capuserCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
