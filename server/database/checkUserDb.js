var request = require('request');
var config = process.env.NODE_ENV === 'production' ? {} : require('../../config/config');

var neo4j = require('neo4j-driver').v1;
var driver;
if ( process.env.NODE_ENV === 'production' ) {
	driver = neo4j.driver(process.env.DB_BOLT_HOST, neo4j.auth.basic(process.env.DB_USERNAME, process.env.DB_PASSWORD));
} else {
	driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));
}
var session = driver.session();	
// 
module.exports = {
	githubGetUser: function(user, callback) {
		var endpoint = 'https://api.github.com/users/';
		var url = endpoint + user + '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
		var options = {
			url: url,
			headers: {
	  		'User-Agent': 'adtran117'
			}
		}

		console.log(url);
		
		request(options, function(err, res, body) {
			try {
				body = JSON.parse(body);
			}
			catch (e) {
				console.log('ERROR: githubGetUser() -', e);
			}
			if(!body.message) {
				console.log(options.url)
				addUserToDb(user, body, callback);
			} else {
				console.log('User does not exist!');
				// An argument of false shows that the searched User doesn't exist on gitHub so nothing was added to DB
				callback(false);
				// session.close();
				// driver.close();
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
			console.log('inside addUserToDb')
			getUserRepoUrl(user, callback);
		})
		.catch(function(err) {
			console.log("Error attempting to add User to the DB", err);
			// session.close();
		})
}

// This function gets the URL for the User's public repos
function getUserRepoUrl (user, callback) {
	// session.run("MATCH (n:User {login:'" + user + "'}) return n.repos_url as repos_url")
	session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' return n.repos_url as repos_url")
		.then(function(results){
			var repos_url = results.records[0].get('repos_url');
			var url = repos_url + '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
			var options = {
				url: url,
				headers: {
		  		'User-Agent': 'adtran117'
				}
			}
			// Make a request to get info on all of User's repos
			getRepoInfo(user, options, callback);
		})
		.catch(function(err) {
			console.log("Error in githubGetUser..", err);
			// session.close();
		})
}

function getRepoInfo(user, options, callback) {
	request(options, function(err, res, body) {
		try {
			body = JSON.parse(body);
		}
		catch (e) {
			console.log('ERROR: githubGetRepo() -', e);
		}
		console.log('got to getRepoInfo')
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
			// session.run("MATCH (n:User {login:'" + user + "'}) SET n.totalForks = " + totalForks + 
				// ", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
			session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' SET n.totalForks = " + totalForks +
				", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
			.then(function(result){
				console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
				// Start adding User's repos to the DB
				addUserRepos(user, body, callback);
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches", err);
				// session.close();
			})
		} else {
			session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' SET n.totalForks = " + totalForks +
				", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches + ", n.pingedGithub = true")
			.then(function(result){
				console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
				// Start adding User's repos to the DB
				// addUserRepos(user, body, callback);
				callback(true);
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches", err);
				// session.close();
			})
		}
	});
}

function addUserRepos (user, body, callback) {
	var insertCount = -1;
	var relationCount = -1;
	console.log('got to addUserRepos')
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
							// .run("MATCH (n:Repo {name:'" + body[j].name + "'}), (u:User {login:'" + user + 
								// "'}) CREATE (u)-[:CONTRIBUTED_TO]->(n)")
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

