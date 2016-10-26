'use strict';

var app = require('../..');
import request from 'supertest';

var newAccomodation;

describe('Accomodation API:', function() {

  describe('GET /api/accomodations', function() {
    var accomodations;

    beforeEach(function(done) {
      request(app)
        .get('/api/accomodations')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          accomodations = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      expect(accomodations).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/accomodations', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/accomodations')
        .send({
          name: 'New Accomodation',
          info: 'This is the brand new accomodation!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newAccomodation = res.body;
          done();
        });
    });

    it('should respond with the newly created accomodation', function() {
      expect(newAccomodation.name).to.equal('New Accomodation');
      expect(newAccomodation.info).to.equal('This is the brand new accomodation!!!');
    });

  });

  describe('GET /api/accomodations/:id', function() {
    var accomodation;

    beforeEach(function(done) {
      request(app)
        .get('/api/accomodations/' + newAccomodation._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          accomodation = res.body;
          done();
        });
    });

    afterEach(function() {
      accomodation = {};
    });

    it('should respond with the requested accomodation', function() {
      expect(accomodation.name).to.equal('New Accomodation');
      expect(accomodation.info).to.equal('This is the brand new accomodation!!!');
    });

  });

  describe('PUT /api/accomodations/:id', function() {
    var updatedAccomodation;

    beforeEach(function(done) {
      request(app)
        .put('/api/accomodations/' + newAccomodation._id)
        .send({
          name: 'Updated Accomodation',
          info: 'This is the updated accomodation!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedAccomodation = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedAccomodation = {};
    });

    it('should respond with the updated accomodation', function() {
      expect(updatedAccomodation.name).to.equal('Updated Accomodation');
      expect(updatedAccomodation.info).to.equal('This is the updated accomodation!!!');
    });

  });

  describe('DELETE /api/accomodations/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/accomodations/' + newAccomodation._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when accomodation does not exist', function(done) {
      request(app)
        .delete('/api/accomodations/' + newAccomodation._id)
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
