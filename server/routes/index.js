var express = require('express');
var router = express.Router();
var tweet = require('../models/tweets')
    /* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.get('/tweets', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});
router.post('/tweets', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

module.exports = router;
