var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.route('/user/api')
  .get(userController.listAPI)
  .post(userController.createAPI);
router.route('/user/:id/api')
  .get(userController.getAPI)
  .put(userController.editAPI);
