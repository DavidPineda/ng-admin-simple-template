'use strict';

var express = require('express');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
// var passport = require('./passport');
var environment = require('./config');

module.exports = (app, config) => {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(express.static(path.join(config.rootPath, 'dist')));
  app.use(session({
      store: new RedisStore({ttl: 1200}),
      secret: environment.redis.secret,
      resave: false,
      saveUninitialized: false
    })
  );
  // app.use(passport.initialize());
  // app.use(passport.session());
  app.use(flash());
};
