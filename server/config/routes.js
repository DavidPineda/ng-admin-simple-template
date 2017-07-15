'use strict';

const path = require('path');
const express = require('express');
const authCtrl = require('./../controllers/auth.controller');

let routes = (app, config) => {

  /* Auth Service */
  let auth = express.Router();

  auth.route('/login').post(authCtrl.login);

  auth.route('/whoami').get(authCtrl.whoami);

  auth.route('/logout').get(authCtrl.logout);

  app.use('/auth', auth);
  /* Auth Service */

  app.get('*', (req, res) => {
    res.sendFile(path.join(config.rootPath, 'dist/index.html'));
  });
};

module.exports = routes;
