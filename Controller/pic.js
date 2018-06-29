const express = require('express')
const {User, Pic} = require('../db/schema')
const router = express.Router({mergeParams: true})
// const mongoose = require('mongoose')

router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users)
        console.log(users)
      })
      .catch((err) => console.log(err))
  })

  router.post('/', (req, res) => {
    User.findById(req.params.userId)
      .then((user) => {
          user.pics.push(new Pic())
          user.save()
          .then((data) => {
            res.json(data)
          })
      })
      .catch((err) => {
        console.error(err)
      })
  })
 
  router.delete('/', (req, res) => {
    User.findById(req.params.userId)
    .then((user) => {
        user.update({
            $pull:
            {pics: {_id: req.params.id} }
        })
        .then((data) => {
            res.sendStatus(200)
        })
        .catch(console.error)
    })
    .catch(console.error)
});


 
/*UPDATE PIC*/
router.put('/:id', function (req, res){
    User.findById(req.params.userId).then((user) => {
        const update = req.body.pic
        const pic = user.pic.id(req.params.id)
        if (update.title) {
            pic.title = update.title
        }
        if (update.description) {
            pic.description = update.description
        }
        user.save().then((user) => {
            user.pics = user.pics.reverse()
            res.json(user)
        })
      })
    })



 


module.exports = router
