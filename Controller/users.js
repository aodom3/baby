const express = require('express')
const {User} = require('../db/schema')
const router = express.Router()

/* GET users listing. */
router.get('/', (req, res,) => {
  User.find()
  .then(users => {
    res.json(users) 
    console.log(users)
  })
  .catch((err)=> console.log(err))
})

router.post('/', (req, res) => {
  const newUser = new User(req.body.user)
  newUser.save()
  .then((user) => {
    res.json(user)
  })
  .catch((err)=>{
    console.error(err)
  })
})
/*UPDATE users listing */

router.put('/:userId', (req, res)=> {
  User.findByIdAndUpdate (req.params.id, req.body.user, {new:true})
    .then((user) => {
      res.json(user)
    })
      .catch((error) => {
        console.log(error)
      })
  })

/* DELETE users listing */

router.delete('/:userId', (req, res) =>{
  User.findByIdAndRemove(req.params.userId)
   .then((user) => {
     res.sendStatus(200)
   })
    .catch(console.error)
  })
module.exports = router
