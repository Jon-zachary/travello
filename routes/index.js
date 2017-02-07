var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { isLoggedIn: false });
});

router.get('/trips', function(req, res, next) {
  res.render('trips', { isLoggedIn : true });
});


module.exports = router;