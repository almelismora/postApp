const express = require('express')

const mongodb = require('mongodb')

const router = express.Router()


// GET POST
router.get('/', (req, res) => {
    res.send('hello world')
}) // reference to '/api/posts'


// ADD POST


// DELETE POST





module.exports = router
