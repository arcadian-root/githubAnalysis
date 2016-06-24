var passport = require('passport');

var requestHandler = require('./requestHandler.js');
var db = require('./database/database.js');

// temporary assignment
var userInfo = null;

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
      // Get user data
      userInfo = req.user;
      res.redirect('/dashboard');
    }
  );

  app.get('/logout', function (req, res) {
   console.log('in /user/logout');
   userInfo = null;
   req.logout();
   res.redirect('/');
  });

  // TODO: setup endpoints

  app.get('/user/info', function (req, res) {
    console.log(userInfo)
    res.send(userInfo);
  })
  app.get('/sample', requestHandler.wildcard);
  app.get('/dashboard', requestHandler.wildcard);
};