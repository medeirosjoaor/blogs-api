const PostCategoryService = require('../services/postCategory.service');

async function getAll(_, response) {
  try {
    const posts = await PostCategoryService.getAll();

    return response.status(200).send(posts);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

async function getAllByName(request, response) {
  try {
    const { query: { q } } = request;

    const posts = await PostCategoryService.getAllByName(q);

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

async function update(request, response) {
  try {
    const { body: { title, content }, params: { id } } = request;
  
    await PostCategoryService.update({ id, title, content });
  
    const [post] = await PostCategoryService.findById(id);
  
    return response.status(200).send(post);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

module.exports = {
  getAll,
  getAllByName,
  findById,
  update,
};
