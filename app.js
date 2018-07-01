require("dotenv").config()

const express = require('express')
// const path = require('path')
const logger = require('morgan')
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// database set-up
const app = express()
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI) //mongodb://localhost/manga

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

app.use(logger('dev'))
app.use(express.json())
// app.use(bodyParser.json())
app.use(express.static(__dirname + '/client/build/'))
// app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})
const UsersController = require('./Controller/users')
app.use('/api/users', UsersController)

const picsController = require('./Controller/pic')
app.use('api/users/:userId/pics', picsController)


module.exports = app