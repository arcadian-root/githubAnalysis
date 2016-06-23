var path = require('path');
var passport = require('passport');

var db = require('./database/database.js');

module.exports = function (app, express) {
  app.get('/api/v1/repos/:name', db.getRepo);
  // app.get('/api/v1/users/:name', db.getUser);

  app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
  });

  // Authenticate requests
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', passport.authenticate('github', 
    { failureRedirect: '/login' }),

    function(req, res) {
      // Successful authentication, redirect home.
      // TODO: define this url dashboard is created
      res.redirect('/sample');
    });
};