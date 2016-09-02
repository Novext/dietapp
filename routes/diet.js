var express = require('express');
var router = express.Router();
var dietController = require('../controllers/dietController');

router.route('diet/api')
  .get(dietController.listAPI)
  .post(dietController.createAPI);
router.route('diet/:id/api')
  .get(dietController.getAPI)
  .put(dietController.editAPI);
