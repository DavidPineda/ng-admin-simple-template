'use strict';

var config = {
  development: {
    redis: {
      secret: 'nextapp'
    },
    deploy: {
      port: 9092
    }
  },
  production: {
    redis: {
      secret: process.env.REDIS_SECRET
    },
    deploy: {
      port: 9092
    }
  }
}

let environment = config.development;

if (process.env.NODE_ENV === 'production') {
  environment = config.production;
}

module.exports = environment;
