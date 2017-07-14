'use strict';

var passport = require('./../config/passport');

function login (req, res, next) {
  passport.authenticate('local', function (err, data, info) {
    if (err) { return next(err); }
    if (!data) {
      return res.status(200).send({success: false});
    }
    req.logIn(data, function (err) {
      if (err) { return next(err); }
      if (data.success) { return res.status(200).send({success: true}); }
      return res.status(200).send({success: false});
    });
  })(req, res, next);
}

function logout (req, res, next) {
  req.session.destroy((err) => {
    if (!err) {
      res.send({destroy: true});
    } else {
      console.log(err);
    }
  });
}

function whoami (req, res) {
  if (req.isAuthenticated()) {
    return res.json(req.user);
  } else {
    res.json({auth: false});
  }
}

function ensureAuth (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).send({error: 'not authenticated'});
}

module.exports = {
  login,
  logout,
  whoami,
  ensureAuth
}
