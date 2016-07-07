var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var path = require('path');

var session = require('express-session');
var passport = require('passport');

var config = process.env.NODE_ENV === 'production' ? {} : require('../config/config');
var SERVER = process.env.NODE_ENV === 'production' ? 'docker' : 'localhost';
var GITHUB_CLIENT_ID = process.env.CLIENT_ID || config.CLIENT_ID;
var GITHUB_CLIENT_SECRET = process.env.CLIENT_SECRET || config.CLIENT_SECRET;
var SECRET = process.env.SESSION_SECRET || config.SESSION_SECRET;


// Authentication
app.use(session({secret: SECRET}));
app.use(passport.initialize());
app.use(passport.session());

// Configure Github authentication strategy
var Strategy = require('passport-github').Strategy;
passport.use(new Strategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
  },
  function(accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


// Middleware
app.use('/static', express.static(__dirname + "/../public/"));

app.use(bodyParser.json());

// Allow CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

require('./routes.js')(app, express);

var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
  console.log('Listen to the port', SERVER + ':' + PORT);
});