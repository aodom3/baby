require('dotenv').config()

// database setup
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
// mongoose.Promise = global.promise

// uses models from `schema.js`
const Schema = require('./schema')
const User = Schema.User
const Pic = Schema.Pic

// New Pic
const newborn = new Pic({
    month: 'One',
    title: 'First Month',
    description: 'Aww little one, you are so precious'
})
const month2 = new Pic({
    month:'Two',
    title: 'Second Month',
    description: 'You are growing so quickly'
})
const Ashley = new User({
    userName:'AshLee@aol.com',
    password: '1234',
})

const Luke = new User({
    email:'Luke90@aol.com',
    password: '4321',
})
const User=[Ashley,Luke]
const Pic =[newborn, month2]

User.forEach((user) =>{
    user.pics = pics

    user.save()
    .then((user) =>{
        console.log(`${user.name} saved!`)
    })
    .catch ((error) =>{
        console.log(error)
    })

})
// User.remove({})
//     .then(() => Ashley.save())
//     .then(() => console.log('Saved!'))
//     .then(() => mongoose.connection.close())
//     .catch(console.error)


