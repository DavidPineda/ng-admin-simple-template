'use strict';

const path = require('path');
const express = require('express');

let routes = (app, config) => {

  let session = express.Router();

  session.route('/sigin').get((req, res) => {
    return res.status(200).send({success: true, message:'OK'});
  });

  app.use('/session', session);

  app.get('*', (req, res) => {
    res.sendFile(path.join(config.rootPath, 'dist/index.html'));
  });
};

module.exports = routes;
