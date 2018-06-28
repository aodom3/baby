require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI)
// mongoose.Promise = global.promise

const {User, Pic} = require('./schema')

const Month1 = new Pic({
    title: 'First Month',
    description: 'Aww little one, you are so precious'
})
const Month2 = new Pic({
    title: 'Second Month',
    description: 'You are growing so quickly'
})
const Ashley = new User({
    userName:'AshLee',
    password: '1234',
})

User.remove({})
    .then(() => Ashley.save())
    .then(() => console.log('Saved!'))
    .then(() => mongoose.connection.close())
    .catch(console.error)


