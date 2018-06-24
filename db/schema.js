const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const MangaSchema = new Schema({
    title: String,
    // cover: String,
    author: String,
    category: String,
    chapter: String
})

const UserSchema = new Schema({
    avatar: String,
    username: String,
    password: String,
    mangas: [MangaSchema]
});

const UserModel = mongoose.model('User', UserSchema)
const MangaModel = mongoose.model('Manga', MangaSchema)


module.exports = {
    UserModel: UserModel
    MangaModel: MangaModel,
    
}