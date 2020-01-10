// Required node modules
require('dotenv').config() // provide access to variables inside .env file
let express = require('express')
let flash = require('connect-flash')
let layouts = require('express-ejs-layouts')
let session = require('express-session')
var db = require('./models')

// Declare express app variable
let app = express()

// Include passport configuration
let passport = require('./config/passportConfig')

// Set up and middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(flash()) // Depends on session; must come after it
app.use(passport.initialize()) // Depends on session; must come after it
app.use(passport.session()) // Depends on session; must come after it

// Custom middleware: Add variables to locals for each page
app.use((req, res, next) => {
  res.locals.alerts = req.flash()
  res.locals.user = req.user
  next()
})

// Add any controllers we have
app.use('/auth', require('./controllers/auth'))
app.use('/profile', require('./controllers/profile'))
app.use('/gardens', require('./controllers/gardens'))

// Add home or catch-all routes
app.get('/', (req, res) => {
  res.render('home')
})

// show single plant
app.get('/plants/:id', function(req, res) {
	db.plant.findOne({
	  where: {id: req.params.id}
	}).then(function(plant) {
	  res.render('plants/show', {plant: plant})
	}).catch(function(error) {
	  console.log(error)
	  res.status(400).render('main/404')
	})
  })

//list all plants
app.get('/plants', (req, res) => {
	db.plant.findAll()
	.then(plants => {
		res.render('plants/index', {plants})
	})
})


app.get('*', (req, res) => {
  res.render('error')
})


app.listen(process.env.PORT || 3000, () => {
  console.log('Listening for your wisdom')
})
