var path = require('path');

exports.wildcard = function(req, res) {
	if (req.isAuthenticated()) {
  	// html += "<p>authenticated as user:</p>"
	  // html += "<pre>" + JSON.stringify(req.user, null, 4) + "</pre>";
	  // console.log('already auth');
	  res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
} else {
  	res.redirect('/');
	}
}