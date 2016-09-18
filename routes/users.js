var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.route('/')
  .get(userController.getAll)
  .post(userController.create);

router.route('/social')
    .post(userController.createSocial);

router.route('/:id')
  .get(userController.getOne)
  .put(userController.edit);




  module.exports = router;
