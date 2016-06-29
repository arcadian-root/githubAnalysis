var should = require('chai').should();
var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');
var request = require('request');



describe('HTTP status code', function() {
  it('should answer GET request for / with a 200 status code', function(done){
    api.get('/')
    .set('Accept', 'application/text')
    .expect(200, done);
  });

  // similar test, different ways:
  it('should answer GET request for a non-existing url with a 404 status code', function(done){
    request('http://localhost:3000/nonexist', function(error, res, body){
        expect(res.statusCode).to.equal(404);
        done();
      })
    });
});


describe('GET request destination', function() {
  it('should redirect user to / when logout', function(done) {
    request('http://localhost:3000/logout', function(error, res, body) {
      expect(res.req.path).to.equal('/');
      done();
    });
  });
});



