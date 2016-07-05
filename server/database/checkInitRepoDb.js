var request = require('request');
var config = require('../../config/config');

var neo4j = require('neo4j-driver').v1;
var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j1"));
var session = driver.session();
var checkRepoDb = require('./checkRepoDb');


module.exports = {
	githubGetInitRepo: function(repoOwnName, callback) {
		session
			.run("MATCH (n:Repo) WHERE n.contributors_url =~ '(?i).*" + repoOwnName +
				".*' AND n.pingedGithub = TRUE RETURN n, n.contributors_url as url, n.pingedGithub as pingedGithub")
			.then(function(result) {
				// If the pingedGithub property is true, we just need to fetch the node from the DB
				if(result.records[0].get('pingedGithub') === true) {
					console.log('inside again')
					callback(result.records);
				} 
			})
			.catch(function(err) {
				console.log('Repo not found! Asking github for Repo Data');
				fetchRepo(repoOwnName, callback);
			})
	}
};

function fetchRepo(repoOwnName, callback) {
	var url = 'https://api.github.com/repos/' + repoOwnName;
	url += '?client_id=' + config.CLIENT_ID+ '&client_secret=' + config.CLIENT_SECRET;
	var options = {
		url: url,
		headers: {
			'User-Agent': 'adtran117'
		}
	}

	request(options, function(err, res, body) {
		body = JSON.parse(body);
		if(body.message) {
			console.log('repo does not exist');
			callback('Repo does not exist.');
		} else {
			session
				.run("MERGE (a:Repo {name:'" + body.name + "', id:" + body.id +
			  	", contributors_url:'" + body.contributors_url + "', updated_at:'" + 
			  	body.updated_at + "', pingedGithub:" + true + "})")
				.then(function(result) {
					// console.log('success');
					// console.log(repoOwnName);
					let repoName = repoOwnName.split('/')[1];
					// getUsers(repoOwnName, body.contributors_url);
					checkRepoDb.githubGetRepo(repoName, function(result) {
						if(result === false) {
							console.log('repo doesnt exist');
							callback('repo doesnt exist');
						} else {
							session.run("MATCH (n:Repo) WHERE n.contributors_url =~ '(?i).*" + repoOwnName +
								".*' RETURN n")
							.then(function(result) {
								console.log('done');
								// console.log(result.res)
								callback(result.records);
							})
						}
					});
				})
		}
	});
}