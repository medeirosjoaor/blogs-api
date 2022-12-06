const express = require('express');
const UserMiddleware = require('../middlewares/user.middleware');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.post('/login', UserMiddleware.validateLogin, UserController.findByEmail);
router.post(
  '/user',
  UserMiddleware.validatePassword,
  UserMiddleware.validateDisplayName,
  UserMiddleware.validateEmail,
  UserController.create,
);

module.exports = router;
