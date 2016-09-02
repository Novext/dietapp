var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');

router.route('diet/comment/api')
  .get(commentController.listAPI)
  .post(commentController.createAPI);
router.route('diet/comment/:id/api')
  .get(commentController.getAPI)
  .put(commentController.editAPI);
