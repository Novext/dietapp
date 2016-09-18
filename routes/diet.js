var express = require('express');
var router = express.Router();
var dietController = require('../controllers/dietController');

router.route('/')
  .get(dietController.getOne)
  .post(dietController.create);

router.route('/:id')
  .get(dietController.edit);

module.exports = router;
