//SYNC VERSION

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
					addUserToDb(repo, body, callback, 0);
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

function addUserToDb(repo, body, callback, start) {
	// var insertCount = -1;
	// for(var i = 0; i < body.length; i++) {
		console.log(body[0].repos_url)
		session
			.run("MERGE (a:User {login:'" + body[start].login + "', id:" + body[start].id + ", avatar_url:'" +
				body[start].avatar_url + "', url:'" + body[start].url + "', html_url:'" + body[start].html_url + 
				"', followers_url:'" + body[start].followers_url + "', following_url:'" + body[start].following_url +
				"', starred_url:'" + body[start].starred_url + "', subscriptions_url:'" + body[start].subscriptions_url + 
				"', organizations_url:'" + body[start].organizations_url + "', repos_url:'" + body[start].repos_url + "'})")
			.then(function(result) {	
				// Get URL for User's public Repos
				// ++insertCount;
				++start
				if(start < body.length) {
					addUserToDb(repo, body, callback, start);
				} else {
					console.log('HERE',body[7].repos_url)
					getRepoInfo(repo, body, body, callback, body.length, 0);
				}
			})
			.catch(function(err) {
				console.log("Error attempting to add User to the DB", err);
				// session.close();
			})
		
}
// }

function getRepoInfo(repo, listOfUsers, listOfUsersUrl, callback, max, start) {
	var url = listOfUsersUrl[start].repos_url + '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
	var options = {
		url: url,
		headers: {
  		'User-Agent': 'adtran117'
		}
	}
	request(options, function(err, res, body) {
		if(err) {
			console.log("ERRRORRRR", err)
		}
		body = JSON.parse(body);
		var totalForks = 0;
		var totalStars = 0;
		var totalWatches = 0;
		if(body.length > 0) {
			console.log('start')
			// Increment the totals from each repo
			for(var i = 0; i < body.length; i++) {
				totalForks += body[i]['forks'];
				totalStars += body[i]['stargazers_count'];
				totalWatches += body[i]['watchers_count'];
			}
			// Add User's totals to the DB
			// session.run("MATCH (n:User {login:'" + user + "'}) SET n.totalForks = " + totalForks + 
			session.run("MATCH (n:User) WHERE n.login=~'(?i)" + listOfUsers[start].login + "' SET n.totalForks = " + totalForks + 
				", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
			.then(function(result){
				console.log('Added ' + listOfUsers[start].login + ' to the DB with total forks, stars, and watches');
				// Start adding User's repos to the DB
				++start;
				console.log(start, max);
				if(start < max) {
					console.log('keep recursing')
					getRepoInfo(repo, listOfUsers, listOfUsersUrl, callback, max, start)
				} else {
					addRelationships(repo, listOfUsers, callback, max, 0);
					
				}
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches", err);
				// session.close();
			})
		} else {
			var totalForks = 0;
			var totalStars = 0;
			var totalWatches = 0;
			session.run("MATCH (n:User) WHERE n.login=~'(?i)" + listOfUsers[start].login + "' SET n.totalForks = " + totalForks + 
				", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
			.then(function(result){
				console.log('Added ' + listOfUsers[start].login + ' to the DB with total forks, stars, and watches');
				// Start adding User's repos to the DB
				++start;
				console.log(start, max);
				if(start < max) {
					console.log('keep recursing')
					getRepoInfo(repo, listOfUsers, listOfUsersUrl, callback, max, start)
				} else {
					addRelationships(repo, listOfUsers, callback, max, 0);
					
				}
			})
			.catch(function(err) {
				console.log("ERROR when adding User's forks, stars, and watches", err);
				// session.close();
			})
		}
	});
}

function addRelationships(repo, listOfUsers, callback, max, start) {
	session
		// .run("MATCH (n:Repo {name:'" + repo + "'}), (u:User {login:'" + user + 
		.run("MATCH (n:Repo) WHERE n.name=~'(?i)" + repo + "' MATCH (u:User) WHERE u.login=~'(?i)" + listOfUsers[start].login + 
								// "'}) CREATE (u)-[:CONTRIBUTED_TO]->(n)")
								"' MERGE (u)-[:CONTRIBUTED_TO]->(n)")
		.then(function(){
			// ++numRelationsAdded;
			console.log("Adding " + listOfUsers[start].login + " User #" + start + "of " + max);
			++start;
			if (start < max) {
				addRelationships(repo, listOfUsers, callback, max, start);
			} else {
				console.log('inside');
				callback(true);
			}
			// if(max <= numRelationsAdded) {
				// console.log('inside')
				// numRelationsAdded = 0;
				// callback(true);
			})
}