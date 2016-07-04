var url = require('url');
var querystring = require('querystring');
var checkUserDb = require('./checkUserDb');
var checkRepoDb = require('./checkRepoDb');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));

var session = driver.session();

module.exports = {
  getRepo: function (req, res) {
    let parsed = url.parse(req.url);
    let query = querystring.parse(parsed.query);
    let q;
    let insertCount = 0;

    if (!!query.getUsers === true) {
      // q = 'MATCH (u:User)-[:CONTRIBUTED_TO]->(n:Repo { name: "' + 
        // req.params.name + '" }) RETURN u, n';
      q = "MATCH (u:User)-[:CONTRIBUTED_TO]->(r:Repo) WHERE r.name =~'(?i)" + req.params.name + "' RETURN u, r";
    } else {
      // q = 'MATCH (n:Repo { name: "' + req.params.name + 
        // '" }) RETURN n';
      q = "MATCH (n:Repo) WHERE n.name=~'(?i)" + req.params.name + "' RETURN n";
    }

    findRepo(req, res, q, insertCount);
  },

  getUser: function (req, res) {
    let parsed = url.parse(req.url);
    let query = querystring.parse(parsed.query);
    let q;
    let insertCount = 0;

    if (!!query.getRepos === true) {
      // q = 'MATCH (u:User { login: "' + req.params.login + 
        // '" })-[:CONTRIBUTED_TO]->(n:Repo) RETURN n, u';
      q = "MATCH (u:User)-[:CONTRIBUTED_TO]->(r:Repo) WHERE u.login =~'(?i)" + req.params.login +
        "' RETURN r, u";
    } else {
      // q = 'MATCH (u:User { login: "' + req.params.login + 
        // '" }) RETURN u';
      q = "MATCH (u:User) WHERE u.login=~'(?i)" + req.params.login + "' RETURN u";
    }
    findUser(req, res, q, insertCount);
  }
};

function findRepo(req, res, query, insertCount) {
  session.run(query)
    .then(results => {
      // if(results.records.length === 1 && insertCount < 1) {
      if(insertCount < 1) {

        checkRepoDb.githubGetRepo(req.params.name, function(result) {
          if(result === false) {
            res.end('No other contributors!');
          } else {
            ++insertCount;
            findRepo(req, res, query, insertCount);
          }
        })
      } else {
        // session.close();
        res.end(JSON.stringify(results.records));
      }
    })
    .catch(err => {
      console.log('ERROR: getRepo() -', err);
      res.end(err);
    });
}


function findUser(req, res, query, insertCount) { 
  // console.log('insertCount', insertCount);
  session.run(query)
    .then(results => {
      // If the DB doesn't have the User, do the following...
      // if(results.records.length <= 1 && insertCount < 1 ) {
      if(insertCount < 1 ) {        
        // Talk to Github, add User info to Db
        checkUserDb.githubGetUser(req.params.login, function(result) {
          // If User doesn't exist in Github, respond with this...
          if(result === false) {
            res.end('User does not exist!');
            // User exists and was finished adding into DB so recursively run the function
            // to respond with the result
          } else {
            ++insertCount;
            findUser(req, res, query, insertCount);
          }
        });
      // Else respond with the User in the DB
      } else {
        session.close();
        res.end(JSON.stringify(results.records));
      }
    })
    .catch(err => {
      console.log('ERROR: getRepo() -', err);
      res.end(err);
    });
}