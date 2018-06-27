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
/*UPDATE users listing */

router.put('/:id', function (req, res, next){
  User.findByIdAndUpdate (req.params.id, req.body, function (err, post){
      if (err) return next (err);
      res.json(post)
  })
})

/* DELETE users listing */

router.delete('/:id', function (req, res, next){
  User.findByIdAndRemove(req.params.id, req.body, function (err, post){
      if (err) return next (err);
      res.json(post)
  })
})


module.exports = router
