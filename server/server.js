var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var requestHandler = require('./requestHandler');
var session = require('express-session');
var passport = require('passport');
var config = require('./../config/config');
var GITHUB_CLIENT_ID = process.env.CLIENT_ID || config.CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET || config.CLIENT_SECRET;
var SECRET = process.env.SESSION_SECRET || config.SESSION_SECRET;

// authentication
app.use(passport.initialize());
app.use(passport.session());
// Configure Github authentication strategy
var Strategy = require('passport-github').Strategy;
passport.use(new Strategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));
// Authenticate requests
app.get('/auth/github', passport.authenticate('github'));

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect dashboard.
    res.redirect('/dashboard');
  });

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.get('/logout', function(req, res) {
 console.log('in /user/logout');
 req.logout();
 res.redirect('/');
});


//TODO: define environment variable
//TODO: setup authentication if hnecessary

app.use(express.static(__dirname + "/../public/"));

// middleware
app.use(bodyParser.json());

// TODO: setup endpoints

app.get('/sample', requestHandler.wildcard);
app.get('/dashboard', requestHandler.wildcard);

// TODO: accept env variable if procided
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Listen to the port', PORT);
});