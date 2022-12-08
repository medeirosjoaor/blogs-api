const PostService = require('../services/post.service');
const PostCategoryService = require('../services/postCategory.service');

async function create(request, response) {
  try {
    const { body: { title, content, categoryIds } } = request;
    const { user: { id: userId } } = request;

    const { dataValues } = await PostService.create({ userId, title, content });

    PostCategoryService.create({ categoryIds, postId: dataValues.id });

    return response.status(201).send(dataValues);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

module.exports = {
  create,
};
