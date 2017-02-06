var express = require('express');
var router = express.Router();
var models = require('../server/models/index');

router.get('/', function(req, res, next) {
  models.Trip.findAll({}).then(function(trips) { 
    res.render('trips/trips', {
      title: 'trips',
      trips:trips
    });
  });
});

router.get('/new', function(req,res,next) {
  res.render('trips/new',{title:'New Trip'});
});


router.post('/', function(req, res, next) {
      models.Trip.create({
        title:'Trips',
        tripname:req.body.tripname,
        password: req.body.password,     //is password necesscery
        description: req.body.description 
}).then(res.redirect('/'));
});

 // DELETE from Trips page. 

router.delete('/:id', function(req, res, next){
  models.Trip.destroy({
    where: {id: req.params.id}
  }).then(function(trips){
    res.redirect('/trips');
  });
});

module.exports = router;