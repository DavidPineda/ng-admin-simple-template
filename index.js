'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var globalConf = require('./server/config/config');

let config = {
  rootPath: __dirname
};

require('./server/config/express')(app, config);
require('./server/config/routes')(app, config);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(globalConf.deploy.port, () => console.log(`API running on localhost:${globalConf.deploy.port}`));
