var express = require('express');
var router = express.Router();
var users = require('./users');
var diets = require('./diet');

router.use('/users',users);
router.use('/diets',diets);

router.get('/',function () {
    res.send('Welcome to Dietapp API');
})
module.exports = router;
