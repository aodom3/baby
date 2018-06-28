const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const PicSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
})
const MonthSchema = new Schema({
    Month: {
        type: Number,
        required: true,
    }
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
const Month = mongoose.model('Month', MonthSchema)

module.exports = {
   User, Pic, Month
    
}