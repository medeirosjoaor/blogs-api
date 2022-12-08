const express = require('express');
const TokenMiddleware = require('../middlewares/token.middleware');
const PostCategoryMiddleware = require('../middlewares/postCategory.middleware');
const PostController = require('../controllers/post.controller');

const router = express.Router();

router.post(
  '/post',
  TokenMiddleware.validateToken,
  PostCategoryMiddleware.validateFields,
  PostCategoryMiddleware.validateCategoryIds,
  PostController.create,
);

module.exports = router;
