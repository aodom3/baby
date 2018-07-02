const express = require('express')
const router = express.Router({mergeParams: true})
const {UserModel, PicModel} = require('../db/schema')

// Get New Pic
  router.post('/', function (req, res) {
    UserModel.findById(req.params.userId).then((user) => {
        const newPic = new PicModel(req.body)
        user.pics.push(newPic)
        return user.save()
      }).then(savedUser => {
        res.send({
          user: savedUser
        })
      })
    })
 
  router.delete('/:id', (req, res) => {
    UserModel.findById(req.params.userId)
    .then((user) => {
        user.update({
            $pull:
            {pics: {_id: req.params.id} }
        })
        .then((data) => {
            res.sendStatus(200)
        })
    })
})
 
const savedUser = await user.save()
res.send({
    user:savedUser
})



 


module.exports = router
