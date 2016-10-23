const express = require('express')
const router = express.Router()
const tweets = require('../controllers/tweets')

router.get('/tweets/', tweets.findAll)
router.get('/tweets/:id', tweets.findOne)
router.post('/tweets', tweets.createOne)
router.put('/tweets/:id', tweets.updateOne)
router.delete('/tweets/:id', tweets.deleteOne)

module.exports = router
