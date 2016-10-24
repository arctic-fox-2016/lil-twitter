var express = require('express');
var router = express.Router();
var Tweet = require('../models/tweets')
    /* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.post('/tweets', function (req, res, next) {
    let newTweet = new Tweets({
        username: req.body.username,
        avatar: req.body.avatar,
        content: req.body.content,
        createdAt: Date()
    })
    let hashtag = req.body.hashtag.split(" ")
    for (let i in hashtag) {
        newTweet.hashtag.push(hashtag[i])
    }
    newTweet.save(function (err, result) {
        if (err) {
            res.json({
                message: "error",
                details: err
            })
        } else {
            res.json(result)
        }
    })
})

router.get('/tweets', function (req, res, next) {
    Tweets.find({}).sort({
        "createdAt": -1
    }).exec(function (err, result) {
        if (err) {
            res.json({
                message: "error",
                details: err
            })
        } else {
            res.json(result)
        }
    })
})

router.get('/tweets/:q', function (req, res, next) {
    Tweets.find({
        hashtag: req.params.q
    }).sort({
        "createdAt": -1
    }).exec(function (err, result) {
        if (err) {
            res.json({
                message: "error",
                details: err
            })
        } else {
            res.json(result)
        }
    })
})

module.exports = router;
