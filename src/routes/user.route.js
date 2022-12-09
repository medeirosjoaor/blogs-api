const express = require('express');
const TokenMiddleware = require('../middlewares/token.middleware');
const UserMiddleware = require('../middlewares/user.middleware');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.get('/user', TokenMiddleware.validateToken, UserController.getAll);
router.get('/user/:id', TokenMiddleware.validateToken, UserController.findById);
router.post('/login', UserMiddleware.validateLogin, UserController.findByEmail);
router.post(
  '/user',
  UserMiddleware.validatePassword,
  UserMiddleware.validateDisplayName,
  UserMiddleware.validateEmail,
  UserController.create,
);
router.delete('/user/me', TokenMiddleware.validateToken, UserController.destroy);

module.exports = router;
