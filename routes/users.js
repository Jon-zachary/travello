var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');

/* GET users listing. */
router.get('/', authHelpers.loginRequired, (req, res, next) => {
  res.render('/trips', { //TODO: Change test to trips
    //user: req.user.dataValues,
    title: 'User Page'
  });
});

module.exports = router;
