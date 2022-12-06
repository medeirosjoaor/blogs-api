const express = require('express');
const TokenMiddleware = require('../middlewares/token.middleware');
const UserMiddleware = require('../middlewares/user.middleware');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/user', TokenMiddleware.validateToken, UserController.getAll);
router.post('/login', UserMiddleware.validateLogin, UserController.findByEmail);
router.post(
  '/user',
  UserMiddleware.validatePassword,
  UserMiddleware.validateDisplayName,
  UserMiddleware.validateEmail,
  UserController.create,
);

module.exports = router;
