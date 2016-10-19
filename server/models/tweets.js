let mongoose = require('mongoose')
mongoose.connect('localhost:27017/little-twitter')
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
