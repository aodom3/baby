require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.promise

const {UserModel, MangaModel} = require('./schema')

