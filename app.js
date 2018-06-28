require("dotenv").config()
const express = require('express')
const path = require('path')
const logger = require('morgan')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI) //mongodb://localhost/manga

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
});
// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
});

// var indexRouter = require('./routes/index');
var usersRouter = require('./Controller/users')
var app = express()

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/client/build/'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})
const UsersController = require('./Controller/users')
app.use('/api/users', UsersController)

const PicsController = require('./Controller/pic')
app.use('api/users/:userID/pics', PicsController)

const PORT = process.env.PORT || 3001
app.listen(PORT, () =>{
  console.log('App Runnin Ayyye!')
})
module.exports = app