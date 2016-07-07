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
* This file does the following in this order:
* 1. Find the queried Repo in the DB and makes a request to GitHub API for all contributors
*    that the Repo has
* 2. Adds all of those contributors (Users) and their information into our DB and make a request 
*    for information on all of the User's total forks, stars, and watches.
* 3. Add relationships between the Repo and all of its contributors.
*/


/*
* numRelationsAdded keeps track of how many relationships between a User and his/her Repos were
* added our DB. Once numRelationsAdded have been incremented enough to equal the exact amount
* of Repos a User has, it will execute a callback with an argument of true to tell the server to
* give back the Repo data to the client. The numRelationsAdded is globally declared here 
* to ensure asynchronous calls work correctly.
*/
var numRelationsAdded = 0;

module.exports = {
	githubGetRepo: function(repo, callback) {
		// Find the Repo in our DB
		session
			.run("MATCH (n:Repo) WHERE n.name=~'(?i)" + repo + "' return n.contributors_url as url")
			.then(function(result) {
				var url = result.records[0].get('url');
				if ( process.env.NODE_ENV === 'production' ) {
					url += '?client_id=' + process.env.CLIENT_ID+ '&client_secret=' + process.env.CLIENT_SECRET;
				} else {
					url += '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
				}
				var options = {
					url: url,
					headers: {
  					'User-Agent': 'adtran117'
					}
				}

				// Make a request with the Repo's contributors URL
				request(options, function(err, res, body) {
					try {
						body = JSON.parse(body);
						addUserToDb(repo, body, callback);
					}
					catch (e) {
						console.log('ERROR: githubGetRepo() -', e);
					}
				})
			})
	}
};
// THis function adds all of the Repo's contributors into our DB
function addUserToDb(repo, body, callback) {
	var insertCount = -1;
	for(var i = 0; i < body.length; i++) {
		session
			.run("MERGE (a:User {login:'" + body[i].login + "', id:" + body[i].id + ", avatar_url:'" +
				body[i].avatar_url + "', url:'" + body[i].url + "', html_url:'" + body[i].html_url + 
				"', followers_url:'" + body[i].followers_url + "', following_url:'" + body[i].following_url +
				"', starred_url:'" + body[i].starred_url + "', subscriptions_url:'" + body[i].subscriptions_url + 
				"', organizations_url:'" + body[i].organizations_url + "', repos_url:'" + body[i].repos_url + "'})")
			.then(function(result) {	
				// Get URL for User's public Repos
				++insertCount;
				getRepoInfo(repo, body[insertCount].login, body[insertCount].repos_url, callback, body.length, insertCount);
			})
			.catch(function(err) {
				console.log("Error attempting to add User to the DB", err);
			})
		
	}
}

// This function gets all of the contributors Repos and attaches total Forks, Watches, and Stars
// properties to the contributors
function getRepoInfo(repo, user, url, callback, max) {
	if ( process.env.NODE_ENV === 'production' ) {
		url += '?client_id=' + process.env.CLIENT_ID+ '&client_secret=' + process.env.CLIENT_SECRET;
	} else {
		url += '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
	}
	var options = {
		url: url,
		headers: {
  		'User-Agent': 'adtran117'
		}
	}
	request(options, function(err, res, body) {
		try {
			body = JSON.parse(body);
		}
		catch (e) {
			console.log('ERROR: getRepoInfo() -', e);
		}
		var totalForks = 0;
		var totalStars = 0;
		var totalWatches = 0;
		if(body.length > 0) {
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
				addRelationships(repo, user, callback, max);
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches", err);
			})
		} else {
			session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' SET n.totalForks = " + totalForks + 
				", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
			.then(function(result){
				console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
				// Start adding User's repos to the DB
				addRelationships(repo, user, callback, max);
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches when body.length = 0", err);
			})
		}
	});
}

// Create relationships with the original Repo and its contributors
function addRelationships(repo, user, callback, max) {
	session
		.run("MATCH (n:Repo) WHERE n.name=~'(?i)" + repo + "' MATCH (u:User) WHERE u.login=~'(?i)" + user + 
			"' MERGE (u)-[:CONTRIBUTED_TO]->(n) SET n.pingedGithub = true")
		.then(function(){
			++numRelationsAdded;
			console.log("Adding User #" + numRelationsAdded + "of " + max);
			if(max === numRelationsAdded) {
				console.log('inside')
				numRelationsAdded = 0;
				callback(true);
			}
		})
}