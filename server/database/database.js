var url = require('url');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));

var session = driver.session();

module.exports = {
  getRepo: function (req, res) {
    session.run(
      'MATCH (u:User)-[:CONTRIBUTED_TO]-(n:Repo { name: "' + 
        req.params.name + '" }) RETURN n, u')
      .then(results => {
        session.close();
        res.end(JSON.stringify(results.records));
      })
      .catch(err => {
        console.log('ERROR: getRepo() -', err);
        res.end(err);
      });
  },

  getUser: function (req, res) {
    session.run(
      'MATCH (u:User { login: "' + req.params.login + 
        '" })-[:CONTRIBUTED_TO]-(n:Repo) RETURN u, n')
      .then(results => {
        session.close();
        res.end(JSON.stringify(results.records));
      })
      .catch(err => {
        console.log('ERROR: getRepo() -', err);
        res.end(err);
      });
  },
};