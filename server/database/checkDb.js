var request = require('request');
var config = require('../../config/config');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));
var session = driver.session();



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
		
		request(options, function(err, res, body) {
			body = JSON.parse(body);
			if(!body.message) {
				session
				// Add User info into DB
				.run("MERGE (a:User {login:'" + body.login + "', id:" + body.id + ", avatar_url:'" +
					body.avatar_url + "', url:'" + body.url + "', html_url:'" + body.html_url + 
					"', followers_url:'" + body.followers_url + "', following_url:'" + body.following_url +
					"', starred_url:'" + body.starred_url + "', subscriptions_url:'" + body.subscriptions_url + 
					"', organizations_url:'" + body.organizations_url + "', repos_url:'" + body.repos_url + "'})")
				.then(function(result) {	
					// Get URL for User's public Repos
					session.run("MATCH (n:User {login:'" + user + "'}) return n.repos_url as repos_url")
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
									session.run("MATCH (n:User {login:'" + user + "'}) SET n.totalForks = " + totalForks + 
										", n.totalStars = " + totalStars + ", n.totalWatches = " + totalWatches)
									.then(function(result){
										console.log('Added ' + user + ' to the DB with total forks, stars, and watches');
										// An argument of true shows that the searched User exists in github and was added to the DB
										callback(true);
										session.close();
										driver.close();
									})
									.catch(function(err) {
										console.log("ERROR when adding User's forks, stars, and watches", err);
									})
								}
							});
						})
						.catch(function(err) {
							console.log("Error in githubGetUser..", err);
						})
				})
				.catch(function(err) {
					console.log("Error attempting to add User to the DB", err);
				})

			} else {
				console.log('User does not exist!');
				// An argument of false shows that the searched User doesn't exist on gitHub so nothing was added to DB
				callback(false);
				session.close();
				driver.close();
			}
		});
	}
}
