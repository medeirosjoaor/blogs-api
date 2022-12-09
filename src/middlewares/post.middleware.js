const PostService = require('../services/post.service');

async function validateId(request, response, next) {
  const { params: { id } } = request;

  const post = await PostService.findById(id);

  if (!post) {
    return response.status(404).send({ message: 'Post does not exist' });
  }

  next();
}

module.exports = {
  validateId,
};
