var express = require('express');
var router = express.Router();
var dietController = require('../controllers/dietController');

router.route('/diet/api')
  .get(dietController.view)
  .post(dietController.create);
router.route('/diet/:id/api')
  .get(dietController.edit);

  module.exports = router;
