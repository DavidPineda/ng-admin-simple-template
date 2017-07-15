'use strict';

var passport = require('passport');
var passportLocal = require('passport-local');
var LocalStrategy = passportLocal.Strategy;
var config = require('./config');
var utils = require('./../utils');

passport.serializeUser(function (data, done) {
  done(null, data);
});

passport.deserializeUser(function (data, done) {
  done(null, data);
});

passport.use('local', new LocalStrategy(function (username, password, done) {
  /* Utilizar un cliente que permita validar las credenciales del usuario */
  /* Si existe un error "return done(null, err.message);" */
  /* Si las credenciales no son correctas "return done(null, 'Usuario o Password Incorrecto');" */
  /* Si el proceso es correcto "return done(null, data);" */
}));

module.exports = passport;
