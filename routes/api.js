var express = require('express');
var router = express.Router();
var users = require('./users');

router.use('/users',users);

router.use('/',function () {
    res.send('Welcome to Dietapp API');
})
module.exports = router;
