var express = require('express');
var router = express.Router();

var diet = require('./diet');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/*
router.use('/client',client);
router.use('/diet',diet);

router.get('/client/registro',function (req,res) {
    res.render('client/register');
});


router.get('diet/registro',function (req,res) {
    res.render('diet/register');
});
*/
module.exports = router;
