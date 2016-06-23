var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

var requestHandler = require('./requestHandler');
var config = require('../config/config.js');

// authentication
var session = require('express-session');
var passport = require('passport');

app.use(passport.initialize());


// TODO: create and require a config file

var GITHUB_CLIENT_ID = process.env.CLIENT_ID || config.CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET || config.CLIENT_SECRET;

var SECRET = process.env.SESSION_SECRET || config.SESSION_SECRET;


// Configure Github authentication strategy

var Strategy = require('passport-github').Strategy;

passport.use(new Strategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback"
  },

  (accessToken, refreshToken, profile, cb) => {
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

// TODO: define environment variable
// TODO: setup authentication if necessary

app.use(express.static(__dirname + "/../public/"));

// middleware
app.use(bodyParser.json());

// TODO: setup endpoints

require('./requestHandler.js')(app, express);

// TODO: accept env variable if provided
var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
  console.log('Listening on localhost:' + PORT);
});