var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var tweetSchema = mongoose.Schema({
    name: String
});

module.exports= mongoose.model('tweets', tweetSchema)
