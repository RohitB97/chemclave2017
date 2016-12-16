'use strict';

var app = require('../..');
import request from 'supertest';

var newCapuser;

describe('Capuser API:', function() {

  describe('GET /api/capusers', function() {
    var capusers;

    beforeEach(function(done) {
      request(app)
        .get('/api/capusers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          capusers = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(capusers).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/capusers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/capusers')
        .send({
          name: 'New Capuser',
          info: 'This is the brand new capuser!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCapuser = res.body;
          done();
        });
    });

    it('should respond with the newly created capuser', function() {
      expect(newCapuser.name).to.equal('New Capuser');
      expect(newCapuser.info).to.equal('This is the brand new capuser!!!');
    });

  });

  describe('GET /api/capusers/:id', function() {
    var capuser;

    beforeEach(function(done) {
      request(app)
        .get('/api/capusers/' + newCapuser._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          capuser = res.body;
          done();
        });
    });

    afterEach(function() {
      capuser = {};
    });

    it('should respond with the requested capuser', function() {
      expect(capuser.name).to.equal('New Capuser');
      expect(capuser.info).to.equal('This is the brand new capuser!!!');
    });

  });

  describe('PUT /api/capusers/:id', function() {
    var updatedCapuser;

    beforeEach(function(done) {
      request(app)
        .put('/api/capusers/' + newCapuser._id)
        .send({
          name: 'Updated Capuser',
          info: 'This is the updated capuser!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCapuser = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCapuser = {};
    });

    it('should respond with the updated capuser', function() {
      expect(updatedCapuser.name).to.equal('Updated Capuser');
      expect(updatedCapuser.info).to.equal('This is the updated capuser!!!');
    });

  });

  describe('DELETE /api/capusers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/capusers/' + newCapuser._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when capuser does not exist', function(done) {
      request(app)
        .delete('/api/capusers/' + newCapuser._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
