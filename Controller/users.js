const express = require('express')
const router = express.Router()

const Schema = require('../db/schema')
const User = Schema.User


/* index */
router.get('/', (req, res,) => {
  // finds all the users in database (R)
  User.find()
  .then(users => {
    res.json(users) 
    console.log(users)
  })
  .catch((err)=> console.log(err))
})

router.post('/', (req, res) => {
  // gets new user (C)
  const newUser = new User(req.body.user)
  newUser.save()
  .then((user) => {
    res.json(user)
  })
  .catch((err)=>{
    console.error(err)
  })
})
/*UPDATE users listing (U) */

router.put('/:userId', (req, res)=> {
  User.findByIdAndUpdate (req.params.id, req.body.user, {new:true})
    .then((user) => {
      res.json(user)
    })
      .catch((error) => {
        console.log(error)
      })
  })

/* DELETE users listing (D)*/

router.delete('/:userId/delete', (req, res) =>{
  User.findByIdAndRemove(req.params.userId)
   .then((user) => {
     res.sendStatus(200)
   })
    .catch(console.error)
  })
module.exports = router
