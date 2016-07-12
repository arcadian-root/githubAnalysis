var request = require('request');
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
* This file the following in this order:
*
* 1. Ask GitHub API for the queried User's information
* 2. Adds the User to our DB and all information bound to that User that was given by Github API
* 3. Takes the User's repo url and make a request for all information regarding the User's repos
* 4. Take all the information from the User's Repos and attach them as properties of the User in our DB
* 5. Take the User's repos and add them to our DB and create a relationship between the User and his Repos
*/

module.exports = {
  githubGetUser: function(user, callback) {
    var endpoint = 'https://api.github.com/users/';
    var url;
    if ( process.env.NODE_ENV === 'production' ) {
      url = endpoint + user + '?client_id=' + process.env.CLIENT_ID+ '&client_secret=' + process.env.CLIENT_SECRET;
    } else {
      url = endpoint + user + '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
    }
    var options = {
      url: url,
      headers: {
        'User-Agent': 'adtran117'
      }
    }

    // Asking github for User's information
    request(options, function(err, res, body) {
      try {
        body = JSON.parse(body);
      }
      catch (e) {
        console.log('ERROR: githubGetUser() -', e);
      }
      if(!body.message) {
        // Add the User to the DB
        addUserToDb(user, body, callback);
      } else {
        console.log('User does not exist!');
        // An argument of false shows that the searched User doesn't exist on gitHub so nothing was added to DB
        callback(false);
      }
    });
  }
}

// This function adds the User to the DB
function addUserToDb(user, body, callback) {
  session
    .run("MERGE (a:User {login:'" + body.login + "', id:" + body.id + ", avatar_url:'" +
      body.avatar_url + "', url:'" + body.url + "', html_url:'" + body.html_url + 
      "', followers_url:'" + body.followers_url + "', following_url:'" + body.following_url +
      "', starred_url:'" + body.starred_url + "', subscriptions_url:'" + body.subscriptions_url + 
      "', organizations_url:'" + body.organizations_url + "', repos_url:'" + body.repos_url + "'})")
    .then(function(result) {  
      // Get URL for User's public Repos
      getUserRepoUrl(user, callback);
    })
    .catch(function(err) {
      console.log("Error attempting to add User to the DB", err);
    })
}

// This function gets the URL for the User's public repos
function getUserRepoUrl (user, callback) {
  session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' return n.repos_url as repos_url")
    .then(function(results){
      var repos_url = results.records[0].get('repos_url');
      var url;
      if ( process.env.NODE_ENV === 'production' ) {
        url = repos_url + '?client_id=' + process.env.CLIENT_ID+ '&client_secret=' + process.env.CLIENT_SECRET;
      } else {
        url = repos_url + '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
      }
      var options = {
        url: url,
        headers: {
          'User-Agent': 'adtran117'
        }
      }
      // Make a request to get info on all of User's Repos from the Repo url we found
      getRepoInfo(user, options, callback);
    })
    .catch(function(err) {
      console.log("Error in githubGetUser..", err);
    })
}

// This function gets all Repo information (total Forks, Stars, and Watches) from a User specified in the first argument
function getRepoInfo(user, options, callback) {
  request(options, function(err, res, body) {
    try {
      body = JSON.parse(body);
    }
    catch (e) {
      console.log('ERROR: githubGetRepo() -', e);
    }
    var totalForks = 0;
    var totalStars = 0;
    var totalWatches = 0;
    if(body.length > 0) {
      console.log('inside')
      // Increment the totals from each repo
      for(var i = 0; i < body.length; i++) {
        totalForks += body[i]['forks'];
        totalStars += body[i]['stargazers_count'];
        totalWatches += body[i]['watchers_count'];
      }
      // Add User's totals to the DB
      session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' SET n.totalForks = " + totalForks +
        ", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
      .then(function(result){
        console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
        // Start adding User's repos to the DB
        addUserRepos(user, body, callback);
      })
      .catch(function(err) {
        console.log("ERROR when adding User's forks, stars, and watches", err);
      })
    } else {
      // If User has no public Repos, execute the original callback with an argument of true to send start
      // send back the queried User data to the client
      session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' SET n.totalForks = " + totalForks +
        ", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches + ", n.pingedGithub = true")
      .then(function(result){
        console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
        callback(true);
      })
      .catch(function(err) {
        console.log("ERROR when adding User's forks, stars, and watches", err);
      })
    }
  });
}

// This function adds all of the User's public Repos to our DB and creates relationships with the User and his Repo
// nodes in Neo4j
function addUserRepos (user, body, callback) {
  var insertCount = -1;
  var relationCount = -1;
  for(var i = 0; i < body.length; i++) {
    session
      .run("MERGE (a:Repo {name:'" + body[i].name + "', id:" + body[i].id +
        ", contributors_url:'" + body[i].contributors_url + "', updated_at:'" + 
        body[i].updated_at + "'})")
      .then(function() {
        insertCount++;
        if(insertCount === body.length - 1) {
          for (var j = 0; j < body.length; j++) {
            session
              .run("MATCH (n:Repo) WHERE n.name=~'(?i)" + body[j].name + "' MATCH (u:User) WHERE u.login=~'(?i)" + user +
                "' MERGE (u)-[:CONTRIBUTED_TO]->(n) SET u.pingedGithub = true")
              .then(function() {
                ++relationCount;
                if(relationCount === body.length - 1) {
                  // An argument of true shows that the searched User exists in github and was added to the DB
                  callback(true);
                  session.close();
                }
            })
          }
        }
      })
  }
}

