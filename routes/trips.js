var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

/* GET Trips page. */
// router.get('/', function(req, res, next) {
//   res.render('trips/trips', {title:'Trips'});
// });

/* Post to Trips page. */

// router.get('/new', function(req,res,next) {
//   res.render('trips/new', {title:'New Trip'});
// });

router.get('/', function(req, res, next) {
  models.Trip.findAll({}).then(function(trips) { 
    res.render('trips/trips', {
      title: 'trips',
      trips:trips
    });
  });
});
// router.post('trips/new', function(req, res, next) {
    //   models. .create({
        // title:'Trips',
        // username:req.body.username,
       // password: ,     //is password necesscery
        // email:req.body.email
//}).then(res.redirect('/'));
// });

/* DELETE from Trips page. */
// router.delete('trips/:id', function(req, res, next){
//   models. .destroy({
//     where: {id: req.params.id}
//   }).then(function( ){
//     res.redirect('/');
//   });
// });

module.exports = router;