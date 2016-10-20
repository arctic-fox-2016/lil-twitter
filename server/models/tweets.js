let mongoose = require('mongoose')
mongoose.connect('mongodb://tevin:tevin@ds063186.mlab.com:63186/lil-twitter')
let Schema = mongoose.Schema

let tweetsSchema = new Schema({
  username: String,
  avatar:String,
  content: String,
  createdAt: Date,
  hashtag:[String]
})

let Tweets = mongoose.model('tweets', tweetsSchema)
module.exports = Tweets