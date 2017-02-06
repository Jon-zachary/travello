var express = require('express');
var router = express.Router();
var models = require('../server/models/index');
/* GET home page. */

router.get('/', function(req,res,next){
  models.Itinerary.findAll({}).then(function(itinerary){
    res.render('itinerary/itinerary', {
      content: itinerary.content,
      itinerary: itinerary
    })
  })
});

router.post('/', function(req, res, next) {
  models.Itinerary.create({
    content: req.body.content
  }).then(function() {
    res.redirect('itinerary')
  });
});





module.exports = router;
