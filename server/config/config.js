'use strict';

var config = {
  development: {
    redis: {
      secret: 'nextapp'
    }
  },
  production: {
    redis: {
      secret: process.env.REDIS_SECRET
    }
  }
}

let environment = config.development;

if (process.env.NODE_ENV === 'production') {
  environment = config.production;
}

module.exports = environment;
