var url = require('url');
var querystring = require('querystring');
var checkDb = require('./checkDb');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));

var session = driver.session();

module.exports = {
  getRepo: function (req, res) {
    let parsed = url.parse(req.url);
    let query = querystring.parse(parsed.query);
    let q;
    console.log(!!query.getUsers);

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
    let insertCount = 0;

    if (!!query.getRepos === true) {
      q = 'MATCH (u:User { login: "' + req.params.login + 
        '" })-[:CONTRIBUTED_TO]->(n:Repo) RETURN n, u';
    } else {
      q = 'MATCH (u:User { login: "' + req.params.login + 
        '" }) RETURN u';
    }

    var findUser = function() {
      session.run(q)
        .then(results => {
          // If the DB doesn't have the User, do the following...
          if(results.records.length === 0 && insertCount < 1) {
            // Talk to Github, add User info to Db
            checkDb.githubGetUser(req.params.login, function(result) {
              // If User doesn't exist in Github, respond with this...
              if(result === false) {
                res.end('User does not exist!');
                // User exists and was finished adding into DB so recursively run the function
                // to respond with the result
              } else {
                ++insertCount;
                findUser();
              }
            });
          // Else respond with the User in the DB
          } else {
            session.close();
            console.log('made it')
            res.end(JSON.stringify(results.records));
          }
        })
        .catch(err => {
          console.log('ERROR: getRepo() -', err);
          res.end(err);
        });
    }

    findUser();
  },

  // getRepoUrl: function(req,res)
};