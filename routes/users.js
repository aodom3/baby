var express = require('express')
var router = express.Router()
const {UserModel} = require('../db/schema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  UserModel.find().then((users) => {
    res.send({
      users 
  })
})
})
router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
  newUser.save().then((user) => {
    res.json(user)
  }).catch(console.log)
})

// DELETE users listing */



module.exports = router
