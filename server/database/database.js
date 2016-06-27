var url = require('url');
var querystring = require('querystring');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));

var session = driver.session();

module.exports = {
  getRepo: function (req, res) {
    let parsed = url.parse(req.url);
    let query = querystring.parse(parsed.query);
    let q;

    if (!!query.getUsers === true) {
      q = 'MATCH (u:User)-[:CONTRIBUTED_TO]->(n:Repo { name: "' + 
        req.params.name + '" }) RETURN u, n';
    } else {
      q = 'MATCH (n:Repo { name: "' + req.params.name + 
        '" }) RETURN n';
    }

    session.run(q)
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
    let parsed = url.parse(req.url);
    let query = querystring.parse(parsed.query);
    let q;

    if (!!query.getRepos === true) {
      q = 'MATCH (u:User { login: "' + req.params.login + 
        '" })-[:CONTRIBUTED_TO]->(n:Repo) RETURN n, u';
    } else {
      q = 'MATCH (u:User { login: "' + req.params.login + 
        '" }) RETURN u';
    }

    session.run(q)
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