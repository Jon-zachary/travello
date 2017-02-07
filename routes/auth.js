const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');


router.get('/register', function (req, res) {
  res.render('auth/register');
});


// redirect user if they attempt login and are already logged in
router.post('/register', (req, res, next)  => {
  authHelpers.createUser(req, res)
  .then((user) => {
    req.login(user, (err) => {
      if (err) return next(err);

      res.redirect('./login');
    });
  })
  .catch((err) => { res.status(500).json({ status: 'error' }); });
});

// if user not logged.. routed to login page
router.get('/login', authHelpers.loginRedirect, (req, res)=> {
  res.render('auth/login');
});

// local strategy authentication
router.post('/login', passport.authenticate('local', {
    successRedirect: '../trips',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

// user logout, redirect to landing
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;  