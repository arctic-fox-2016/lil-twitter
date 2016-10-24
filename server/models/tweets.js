var mongoose = require('mongoose')
mongoose.connect('mongodb://stackx:stackx@ds057816.mlab.com:57816/stackx')
var Schema = mongoose.Schema

var tweetsSchema = new mongoose.Schema(({
            username: String,
            avatar: String,
            content: String,
            createdAt: Date,
            hashtag: [String]
        })

        var Tweets = mongoose.model('tweets', tweetsSchema)
        module.exports = Tweets
