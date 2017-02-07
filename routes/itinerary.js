var express = require('express');
var router = express.Router();
var models = require('../server/models/index');
/* GET home page. */

router.get('/:id', function(req,res,next) {
  models.Itinerary.findAll({where:{tripid:req.params.id}})
  .then(function(itinerary){
    console.log(itinerary)
    res.render('itinerary/itinerary', {
      content: itinerary.content,
      id: itinerary.id,
      itinerary: itinerary,
      index: req.params.id,
    });
  });
});


router.post('/:id', function(req, res, next) {
  models.Itinerary.create({
    content: req.body.content,
    tripid:req.params.id
  }).then(function() {
    res.redirect(`/itinerary/${req.params.id}`);
  });
});


router.delete('/:id', function(req, res, next) {
  models.Itinerary.destroy({
    where: { id: req.params.id }
  }).then(function(itinerary) {
    res.redirect('back');
  });
});

router.get('/:id/edit', function(req, res, next) {
  models.Itinerary.findById(req.params.id).then(function(itinerary) {
    res.render('itinerary/edititinerary', { itinerary: itinerary });
  });
});

router.put('/:id', function(req, res, next) {
  models.Itinerary.update({
    content: req.body.content
  }, { where: { id: req.params.id } }).then(function() {
    res.redirect(`/itinerary/${req.body.tripid}`);
  });
});



module.exports = router;
