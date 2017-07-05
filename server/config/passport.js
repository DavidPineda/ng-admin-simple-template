'use strict';

var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;
var request = require('request-promise');
// var ip = require('./ip');
// var utils = require('./utils');

passport.serializeUser(function (data, done) {
  done(null, {
    id: data.user.id,
    token: data.token
  });
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
  let options = {
    method: 'POST',
    uri: 'http://localhost:3000/api/users/login',
    body: {
      username,
      password
    },
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    json: true
  };
  request(options)
    .then(res => {
      if (res.success) return done(null, res.data);
      return done(null, false, res.error);
    })
    .catch(error => {
      return done(null, false, error.message);
    });
}));

module.exports = passport;
