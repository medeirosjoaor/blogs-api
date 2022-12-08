const PostCategoryService = require('../services/postCategory.service');

async function getAll(_, response) {
  try {
    const posts = await PostCategoryService.getAll();

    return response.status(200).send(posts);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

module.exports = {
  getAll,
};
