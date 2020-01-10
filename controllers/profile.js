let router = require('express').Router()
var db = require('../models')
let isAdminLoggedIn = require('../middleware/isAdminLoggedIn')
let isLoggedIn = require('../middleware/isLoggedIn')

router.get('/', isLoggedIn, (req, res) => {
  db.user.findOne({
    where: { id: req.user.id },
    include: [db.garden]
  })
  .then(user => {
    res.render('profile/main', { user })
  })
  .catch(err => {
    console.log(err)
  })
})

router.get('/admin', isAdminLoggedIn, (req, res) => {
  res.render('profile/admin')
})

module.exports = router
