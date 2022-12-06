const express = require('express');
const TokenMiddleware = require('../middlewares/token.middleware');
const CategoryMiddleware = require('../middlewares/category.middleware');
const CategoryController = require('../controllers/category.controller');

const router = express.Router();

router.post(
  '/categories',
  TokenMiddleware.validateToken,
  CategoryMiddleware.validateName,
  CategoryController.create,
);

module.exports = router;
