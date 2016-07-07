var should = require('chai').should();
var expect = require('chai').expect;
var supertest = require('supertest');
var api = supertest('http://localhost:3000');
var request = require('request');



describe('HTTP status code', function() {
  it('should answer GET request for / with a 200 status code', function(done) {
    api.get('/')
    .set('Accept', 'application/text')
    .expect(200, done);
  });

  // similar test, different ways:
  it('should answer GET request for a non-existing url with a 404 status code', function(done) {
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

describe('Checking API endpoints', function() {
  it('should receive an output of false when searchiing for a non-existing User in the DB and GitHub API', function(done) {
    request('http://localhost:3000/api/v1/users/ljfoijwelkxoijdfoe', function(error, res, body) {
      const result = JSON.parse(body);
      expect(result).to.equal(false);
      done();
    });
  });

  it('should receive an output of false when searching for a non-existing Repo in the DB and Github API', function(done) {
    request('http://localhost:3000/api/v1/initialRepo/lifojisdle%2Flkdfjoieox', function(error, res, body) {
      const result = JSON.parse(body);
      expect(result).to.equal(false);
      done();
    });
  });

  it('should receive the correct output when searching for an existing User in the DB or Github API', function(done) {
    request('http://localhost:3000/api/v1/users/adtran117', function(error, res, body) {
      const result = JSON.parse(body);
      expect(result[0]._fields[0].labels[0]).to.equal('User');
      expect(result[0]._fields[0].properties.login).to.equal('adtran117');
      done();
    })
  })

  it('should receive the correct output when searching for an existing Repo in the DB or Github API', function(done) {
    request('http://localhost:3000/api/v1/initialRepo/d3%2Fd3', function(error, res, body) {
      const result = JSON.parse(body);
      expect(result[0]._fields[0].labels[0]).to.equal('Repo');
      expect(result[0]._fields[1]).to.equal('https://api.github.com/repos/d3/d3/contributors');
      done();
    })
  })

});


