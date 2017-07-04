'use strict';

var express = require('express');
var app = express();
var server = require('http').createServer(app);

let config = {
  rootPath: __dirname
};

require('./server/config/express')(app, config);
require('./server/config/routes')(app, config);

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '9092';

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
