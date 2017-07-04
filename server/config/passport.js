'use strict';

var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;
// var Client = require('node-rest-client').Client;
// var client = new Client();
// var ip = require('./ip');
// var utils = require('./utils');

passport.serializeUser(function (data, done) {
  if (data) {
    done(null, data);
  }
});

passport.deserializeUser(function (data, done) {
  // let args = {data: {username: data.user.email, password: data.user.password}, headers: ip.headers};
  // client.post(ip.ipServer + '/users/login', args, (data, response) => {
  //   if (data.success) {
  //     done(null, data.data);
  //   } else {
  //     done(null, false);
  //   }
  // });
  done(null, false);
});

passport.use('local', new LocalStrategy(function (username, password, done) {
  // let args = {data: {username: username, password: utils.encrypt(password)}, headers: ip.headers};
  // client.post(ip.ipServer + '/users/login', args, (data, response) => {
  //   if (data.success) {
  //     done(null, data.data);
  //   } else {
  //     done(null, false, data.error);
  //   }
  // });
  done(null, false, data.error);
}));

module.exports = passport;
