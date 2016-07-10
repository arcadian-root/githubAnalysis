var passport = require('passport');
var requestHandler = require('./requestHandler.js');
var db = require('./database/database.js');
var path = require('path');

module.exports = function (app, express) {  
  // Authentication
  app.use(passport.initialize());
  app.use(passport.session());

  // API endpoints when looking up for Users or Repos
  app.get('/api/v1/repos/:name', db.getRepo);
  app.get('/api/v1/users/:login', db.getUser);
  app.get('/api/v1/initialRepo/:link', db.getInitRepo);

  // Authenticate requests
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),

    // Successful authentication, redirect to graph.
    function (req, res) {
      res.redirect('/graph');
    }
  );

  app.get('/logout', function (req, res) {
   req.logout();
   res.redirect('/');
  });

  // Endpoint for when a User requests his/her session
  app.get('/user/info', function (req, res) {
    res.send(req.user);
  })

  app.get('/graph', requestHandler.wildcard);

  app.get('/', function(req, res) {
    if(req.isAuthenticated()) {
      res.redirect('/graph');
    } else {
      res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
    }

  })
};

