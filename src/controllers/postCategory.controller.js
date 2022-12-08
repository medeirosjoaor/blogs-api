const PostCategoryService = require('../services/postCategory.service');

async function getAll(_, response) {
  try {
    const posts = await PostCategoryService.getAll();

    return response.status(200).send(posts);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

async function findById(request, response) {
  try {
    const { params: { id } } = request;

    const [post] = await PostCategoryService.findById(id);

    if (!post) {
      return response.status(404).send({ message: 'Post does not exist' });
    }
    
    return response.status(200).send(post);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

module.exports = {
  getAll,
  findById,
};
