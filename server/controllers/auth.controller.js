'use strict';

var passport = require('./../config/passport');

function login (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      return res.status(200).send({success: false});
    }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      return res.status(200).send({success: true});
    });
  })(req, res, next);
}

module.exports = {
  login
}
