const express = require('express')
const router = express.Router({mergeParams: true})
const {UserModel, PicModel} = require('../db/schema')


  router.post('/', function (req, res) {
    UserModel.findById(req.params.userId)
      .then((user) => {
          user.pics.push(newPic)
          return user.save()
        }).then((savedUser => {
            res.send({
                user: savedUser
            })
          })
      })
     
  router.get('/', (req, res) => {
    Users.find()
      .then(users => {
        res.json(users)
        console.log(users)
      })
      .catch((err) => console.log(err))
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
})
 
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
