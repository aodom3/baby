const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PicSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    month: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required:true,
    },
})

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required:true
    },
    
    pics: [PicSchema]
})

const User = mongoose.model('User', UserSchema)
const Pic = mongoose.model('Pic', PicSchema)


module.exports = {User, Pic,}