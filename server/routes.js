var passport = require('passport');
var requestHandler = require('./requestHandler.js');
var db = require('./database/database.js');
var path = require('path');

module.exports = function (app, express) {  
  // authentication
  app.use(passport.initialize());
  app.use(passport.session());

  // API endpoints
  app.get('/api/v1/repos/:name', db.getRepo);
  app.get('/api/v1/users/:login', db.getUser);

  // Authenticate requests
  app.get('/auth/github', passport.authenticate('github'));

  app.get('/auth/github/callback', 
    passport.authenticate('github', { failureRedirect: '/' }),

    // Successful authentication, redirect dashboard.
    function (req, res) {
      res.redirect('/dashboard');
    }
  );

  app.get('/logout', function (req, res) {
   req.logout();
   res.redirect('/');
  });

  // TODO: setup endpoints

  app.get('/user/info', function (req, res) {
    res.send(req.user);
  })

  app.get('/dashboard', requestHandler.wildcard);

  app.get('/', function(req, res) {
    if(req.isAuthenticated()) {
      res.redirect('/dashboard');
    } else {
      res.sendFile(path.resolve(__dirname, './../public', 'index.html'));
    }

  })
  
};

