var request = require('request');
var config = process.env.NODE_ENV === 'production' ? {} : require('../../../config/config');
var neo4j = require('neo4j-driver').v1;

var driver;
if ( process.env.NODE_ENV === 'production' ) {
  driver = neo4j.driver(process.env.DB_BOLT_HOST, neo4j.auth.basic(process.env.DB_USERNAME, process.env.DB_PASSWORD));
} else {
  driver = neo4j.driver("bolt://localhost", neo4j.auth.basic(config.DB_USERNAME, config.DB_PASSWORD));
}

var session = driver.session();

var should = require('chai').should();
var expect = require('chai').expect;


// require db function
// isnert mock data
// send get request to api

describe('Integration between server and Neo4j database', function(){
  it('should get data from database by sending GET request to API', function(done) {
    // create a mock user
    // this.timeout(20000);
    var body = {
      login: 'mockUserLogin',
      id: 1110,
      avatar_url: 'http://iamugly.com',
      url: 'http://www.github.com/mockUserLogin',
      html_url: 'http://www.github.com/mockUserLogin',
      followers_url: 'http://www.github.com/mockUserLogin/followers',
      following_url: 'http://www.github.com/mockUserLogin/following',
      starred_url: 'http://www.github.com/mockUserLogin/starred',
      subscriptions_url: 'http://www.github.com/mockUserLogin/subscriptions',
      organizations_url: 'http://www.github.com/mockUserLogin/organizations',
      repos_url: 'http://www.github.com/mockUserLogin/repos'
    }

    // insert mock user into database
    session
      .run("CREATE (a:User {login:'" + body.login + "', id:" + body.id + ", avatar_url:'" +
        body.avatar_url + "', url:'" + body.url + "', html_url:'" + body.html_url + 
        "', followers_url:'" + body.followers_url + "', following_url:'" + body.following_url +
        "', starred_url:'" + body.starred_url + "', subscriptions_url:'" + body.subscriptions_url + 
        "', organizations_url:'" + body.organizations_url + "', repos_url:'" + body.repos_url + "'})")
      .then(function(result) {
        request('http://localhost:3000/api/v1/users/mockUserLogin', function(error, res, body) {
          const result = JSON.parse(body);
          session.run("MATCH (u: User {login: 'mockUserLogin'}) DELETE u")
          .then(function(result){
            expect(result[0]._fields[0].labels[0]).to.equal('User');
            expect(result[0]._fields[0].properties.login).to.equal('mockUserLogin');
            session.close();
            driver.close();
          });
        })
      });
      done();
    
  })
});
