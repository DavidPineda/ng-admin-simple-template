'use strict';

const path = require('path');
const express = require('express');
const usersCtr = require('./../controllers/users.controller');

let routes = (app, config) => {

  let session = express.Router();

  session.route('/login').post(usersCtr.login);

  app.use('/session', session);

  app.get('*', (req, res) => {
    res.sendFile(path.join(config.rootPath, 'dist/index.html'));
  });
};

module.exports = routes;
