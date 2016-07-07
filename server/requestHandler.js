var path = require('path');

exports.wildcard = function(req, res) {
	if (req.isAuthenticated()) {
	  res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
} else {
  	res.redirect('/');
	}
}