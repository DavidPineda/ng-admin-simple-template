'use strict';

var config = {
  development: {
    redis: {
      secret: 'nextapp'
    },
    deploy: {
      port: 9092
    },
    api: {
      endpoint: 'http://localhost:3000/api'
    }
  },
  production: {
    redis: {
      secret: process.env.REDIS_SECRET
    },
    deploy: {
      port: 9092
    },
    api: {
      endpoint: 'http://localhost:3000/api'
    }
  }
}

let environment = config.development;

if (process.env.NODE_ENV === 'production') {
  environment = config.production;
}

module.exports = environment;
