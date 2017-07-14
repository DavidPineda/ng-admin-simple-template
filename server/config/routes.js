'use strict';

const path = require('path');
const express = require('express');
const authCtrl = require('./../controllers/auth.controller');

let routes = (app, config) => {

  let auth = express.Router();

  auth.route('/login').post(authCtrl.login);

  auth.route('/whoami').get(authCtrl.whoami);

  app.use('/auth', auth);

  app.get('*', (req, res) => {
    res.sendFile(path.join(config.rootPath, 'dist/index.html'));
  });
};

module.exports = routes;
