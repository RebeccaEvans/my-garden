var express = require('express')
var db = require('../models')
var router = express.Router()

//show user gardens
router.get('/', (req, res) => {
	res.render('gardens/index')
	console.log(req.body)

})

// POST create a new garden
router.post('/new', function(req, res) {
	db.garden.create({
		name: req.body.name,
		location: req.body.location,
		aspect: req.body.aspect,
		exposure: req.body.exposure,
		soilType: req.body.soilType,
		moistureLevel: req.body.moisture,
		userId: req.body.userId
	})
	.then(function(post) {
	  res.redirect('/gardens')
	})
	.catch(function(error) {
	  res.status(400).render('main/404')
	})
  })

// GET display form for creating a new garden
router.get('/new', (req, res) => {
	res.render('gardens/newGarden')
	// .catch(function(error) {
	//   res.status(400).render('main/404')
	// })
})


module.exports = router