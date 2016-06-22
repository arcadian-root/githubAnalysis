var path = require('path');

exports.wildcard = function(req, res) {
  res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
}