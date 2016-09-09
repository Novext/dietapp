var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.route('/user/api')
  .get(userController.view)
  .post(userController.create);
router.route('/user/:id/api')
  .get(userController.edit);


  module.exports = router;
