const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// create Schema

const PicSchema = new Schema({
    month: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
})

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    },
    
    pics: [PicSchema]
})
// models for each schema
const User = mongoose.model('User', UserSchema)
const Pic = mongoose.model('Pic', PicSchema)


module.exports = {User, Pic,}