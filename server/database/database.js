var url = require('url');
var querystring = require('querystring');
var checkUserDb = require('./checkUserDb');
var checkRepoDb = require('./checkRepoDb');
var checkInitRepoDb = require('./checkInitRepoDb');
var config = process.env.NODE_ENV === 'production' ? {} : require('../../config/config');

var neo4j = require('neo4j-driver').v1;
var driver;
if ( process.env.NODE_ENV === 'production' ) {
  driver = neo4j.driver(process.env.DB_BOLT_HOST, neo4j.auth.basic(process.env.DB_USERNAME, process.env.DB_PASSWORD));
} else {
  driver = neo4j.driver("bolt://localhost", neo4j.auth.basic(config.DB_USERNAME, config.DB_PASSWORD));
}
var session = driver.session(); 

/*
* This file handles the interaction between the front end's request for Users or Repos. There are 3 main
* types of requests:
*
* 1. When the client asks for a User
* 2. When the client asks for a Repo when there are already other nodes on the ThreeJS view
* 3. When the client asks for a Repo when there is no nodes on the ThreeJS view
* 
* getRepo handles scenario #1, getUser handles scenario #2, getInitRepo handles scenario #2
*/

module.exports = {
  getRepo: function (req, res) {
    var parsed = url.parse(req.url);
    var query = querystring.parse(parsed.query);
    var q;

    if (!!query.getUsers === true) {
      q = "MATCH (u:User)-[:CONTRIBUTED_TO]->(r:Repo) WHERE r.name =~'(?i)" + req.params.name + "'"
        + " AND r.pingedGithub = TRUE RETURN u, r, r.pingedGithub as pingedGithub";
    } else {
      q = "MATCH (n:Repo) WHERE n.name=~'(?i)" + req.params.name + "' RETURN n";
    }

    findRepo(req, res, q);
  },

  getUser: function (req, res) {
    var parsed = url.parse(req.url);
    var query = querystring.parse(parsed.query);
    var q;

    if (!!query.getRepos === true) {
      q = "MATCH (u:User)-[:CONTRIBUTED_TO]->(r:Repo) WHERE u.login =~'(?i)" + req.params.login +
        "' AND u.pingedGithub = TRUE RETURN r, u, u.pingedGithub as pingedGithub";
    } else {
      q = "MATCH (u:User) WHERE u.login=~'(?i)" + req.params.login + "' AND u.pingedGithub = TRUE" +
        " RETURN u, u.pingedGithub as pingedGithub";
    }
    findUser(req, res, q);
  },

  getInitRepo: function (req, res) {
    // We slice here to remove '/api/v1/initialRepo/' and to get what the client has searched
    var parsed = decodeURIComponent(req.url.slice(20));
    checkInitRepoDb.githubGetInitRepo(parsed, function(result) {
        res.end(JSON.stringify(result));
    });
  },
};

function findRepo(req, res, query) {
  session.run(query)
    .then(function(results) {
      // If the DB doesn't have the Repo, do the following...
      if(results.records.length === 0 || results.records[0].get('pingedGithub') !== true) {
        // This function finds the Repo on Github. If checkUserDb.githubGetRepo can't find the Repo on GitHub, 
        // the callback will have an argument of false. If the Repo exists, the Repo is 
        // added into the DB and the callback=k will run findRepo recursively.
        checkRepoDb.githubGetRepo(req.params.name, function(result) {
          if(result === true) {
            findRepo(req, res, query);
          } else {
            res.end('No other contributors!');
          }
        })
      } else {
        res.end(JSON.stringify(results.records));
      }
    })
    .catch(function(err) {
      console.log('ERROR: getRepo() -', err);
      res.end(err);
    });
}


function findUser(req, res, query) { 
  session.run(query)
    .then(function(results) {
      // If the DB doesn't have the User, do the following...
      if(results.records.length === 0 || results.records[0].get('pingedGithub') !== true) {   
        // This function finds the User on Github. If checkUserDb.githubGetUser can't find the User on GitHub, 
        // the callback will have an argument of false. If the User exists, the User is 
        // added into the DB and the callback will run findUser recursively.
        checkUserDb.githubGetUser(req.params.login, function(result) {
          // If User doesn't exist in Github, respond with this...
          if(result === false) {
            console.log('User doesnt exist!');
            res.end(JSON.stringify(false));
          } else {
            // User enow exists in our DB so recursively run the function to respond with the result
            findUser(req, res, query);
          }
        });
      } else {
        // Else respond with the User in the DB
        session.close();
        res.end(JSON.stringify(results.records));
      }
    })
    .catch(function(err) {
      console.log('ERROR: getUser() -', err);
      res.end(err);
    });
}