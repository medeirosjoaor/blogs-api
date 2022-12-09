const express = require('express');
const TokenMiddleware = require('../middlewares/token.middleware');
const PostCategoryMiddleware = require('../middlewares/postCategory.middleware');
const PostMiddleware = require('../middlewares/post.middleware');
const PostController = require('../controllers/post.controller');
const PostCategoryController = require('../controllers/postCategory.controller');

const router = express.Router();

router.get('/post', TokenMiddleware.validateToken, PostCategoryController.getAll);
router.get('/post/:id', TokenMiddleware.validateToken, PostCategoryController.findById);
router.post(
  '/post',
  TokenMiddleware.validateToken,
  PostCategoryMiddleware.validateTitle,
  PostCategoryMiddleware.validateContent,
  PostCategoryMiddleware.validateCategoryIds,
  PostController.create,
);
router.put(
  '/post/:id',
  TokenMiddleware.validateToken,
  TokenMiddleware.validateUser,
  PostCategoryMiddleware.validateTitle,
  PostCategoryMiddleware.validateContent,
  PostCategoryController.update,
);
router.delete(
  '/post/:id',
  TokenMiddleware.validateToken,
  PostMiddleware.validateId,
  TokenMiddleware.validateUser,
  PostController.destroy,
);

module.exports = router;
