var request = require('request');
var config = process.env.NODE_ENV === 'production' ? {} : require('../../config/config');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));
var session = driver.session();

var numRelationsAdded = 0;

module.exports = {
	githubGetRepo: function(repo, callback) {
		console.log('here is the name breh', repo);

		session
			// .run("MATCH (n:Repo {name: '" + repo + "'}) return n.contributors_url as url")
			.run("MATCH (n:Repo) WHERE n.name=~'(?i)" + repo + "' return n.contributors_url as url")

			.then(function(result) {
				var url = result.records[0].get('url');
				url += '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
				// url =	url.slice(0, url.length-13);
				var options = {
					url: url,
					headers: {
  					'User-Agent': 'adtran117'
					}
				}
				request(options, function(err, res, body) {
					body = JSON.parse(body);
					addUserToDb(repo, body, callback);
				})
			})



		// var endpoint = 'https://api.github.com/users/';
		// var url = endpoint + user + '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
		// var options = {
		// 	url: url,
		// 	headers: {
	 //  		'User-Agent': 'adtran117'
		// 	}
		// }
		
	}

};

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
				// session.close();
			})
		
	}
}

function getRepoInfo(repo, user, url, callback, max) {
	url += '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
	var options = {
		url: url,
		headers: {
  		'User-Agent': 'adtran117'
		}
	}
	request(options, function(err, res, body) {
		body = JSON.parse(body);
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
			// session.run("MATCH (n:User {login:'" + user + "'}) SET n.totalForks = " + totalForks + 
			session.run("MATCH (n:User) WHERE n.login=~'(?i)" + user + "' SET n.totalForks = " + totalForks + 
				", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
			.then(function(result){
				console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
				// Start adding User's repos to the DB
				addRelationships(repo, user, callback, max);
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches", err);
				// session.close();
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
				// session.close();
			})
		}
	});
}

function addRelationships(repo, user, callback, max) {
	session
		// .run("MATCH (n:Repo {name:'" + repo + "'}), (u:User {login:'" + user + 
		.run("MATCH (n:Repo) WHERE n.name=~'(?i)" + repo + "' MATCH (u:User) WHERE u.login=~'(?i)" + user + 
								// "'}) CREATE (u)-[:CONTRIBUTED_TO]->(n)")
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