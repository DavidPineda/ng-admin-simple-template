'use strict';

var config = {
  development: {
    redis: {
      secret: 'nextapp'
    }
  },
  production: {
    redis: {
      secret: 'A1S2D3$*87df#'
    }
  }
}

let environment = config.development;

if (process.env.NODE_ENV === 'production') {
  environment = config.production;
}

module.exports = environment;
