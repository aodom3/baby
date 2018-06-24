require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)


const db = mongoose.connection;
db.on('error', function (err) {
    console.log(err);
});

db.once('open', function () {
    console.log("Connected to MongoDB!");
});

var Schema = require("./schema.js");

var UserModel = Schema.UserModel;
var MangaModel = Schema.MangaModel;

UserModel.remove({}, function (err) {
    console.log(err);
});
const Luke = new UserModel ({
        avatar:'https://img.faceyourmanga.com/mangatars/0/2/2797/large_3810.png',
        username:'LukeBoy1017',
        password:'dasffsfds',
});
const Mike = new UserModel ({
        avatar:'https://img.faceyourmanga.com/mangatars/0/0/401/large_1525.png',
        username:'KillaMikuto',
        password:'ahkehfkajsh',
});
const Derrick = new UserModel ({
        avatar:'https://img.faceyourmanga.com/mangatars/0/0/39/large_1459.png',
        username:'JustDerrick',
        password:'njnjnjnd',
 });
const Kiki = new UserModel ({
        avatar:'https://img.faceyourmanga.com/mangatars/0/1/1033/large_1688.png',
        username:'Kikishi',
        password:'password',

})

new MangaModel ({
    title:'Naruto',
    // cover:'',
    author:'a',
    category:'a',
    chapter:'a',

})
new MangaModel ({
    title:'One Piece',
    // cover:'',
    author:'b',
    category:'b',
    chapter:'b',

})
new MangaModel ({
    title:'One Punch Man',
    // cover:'',
    author:'c',
    category:'c',
    chapter:'c',

})
new MangaModel ({
    title:'Boku No Hero Academia',
    // cover:'',
    author:'d',
    category:'d',
    chapter:'d',

});

const users = [Luke, Mike, Derrick, Kiki]
const mangas = []

users.forEach((user)=> {
    user.mangas = mangas

    user.save()
        .then((user)=>{
            console.log(`${user.name} saved!`)
        })
        .catch((error) =>{
            console.log(error)
        })
});

db.close();