'use strict';

var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;
var config = require('./config');
var utils = require('./../utils');
var User = require('armatupaqueteclient').User;

var Client = new User({endpoint: config.api.endpoint});

passport.serializeUser(function (data, done) {
  data.data.user.token = data.data.token;
  done(null, data.data.user);
});

passport.deserializeUser(function (data, done) {
  done(null, data);
});

passport.use('local', new LocalStrategy(function (username, password, done) {
  let credentials = { username, password: utils.encrypt(password) };
  Client.login(credentials, function (err, data) {
    if (err) return done(null, err.message);
    return done(null, data);
  });
}));

module.exports = passport;
