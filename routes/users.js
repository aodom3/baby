const express = require('express')
const router = express.Router()
const {UserModel} = require('../db/schema')

/* index */
router.get('/', function (req, res){
  // finds all the users in database (R)
  UserModel.find()
  .then((users) => {
    res.send({
      users
    }) 
  })
})

router.get('/:id', async(req, res)=>{
  const user = await UserModel.findById(req.params.id)
  res.send({
    user
  })
})

router.post('/', (req, res) => {
  // gets new user (C)
  const newUser = new UserModel(req.body)
  newUser.save()
  .then((user) => {
    res.send(user)
  })
  })

/*UPDATE users listing (U) */

router.patch('/:userId', (req, res)=> {
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
