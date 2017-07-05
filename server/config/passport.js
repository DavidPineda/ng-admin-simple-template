'use strict';

var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;
var request = require('request-promise');
var config = require('./config');

passport.serializeUser(function (data, done) {
  done(null, data);
});

passport.deserializeUser(function (data, done) {
  done(null, data);
});

passport.use('local', new LocalStrategy(function (username, password, done) {
  // TODO: la petición debe ser generada mediante un cliente
  // Si es correcto el login de usuario retornar
  // return done(null, data);
  // Si no es correcta
  // return done(null, 'Mensaje Error');
}));

module.exports = passport;
