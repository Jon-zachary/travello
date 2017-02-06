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

})





module.exports = router;
