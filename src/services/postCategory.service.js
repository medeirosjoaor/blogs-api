const { PostCategory } = require('../models');

async function create({ categoryIds, postId }) {
  const postCategories = await Promise.all(categoryIds.map((categoryId) => {
    const postCategory = PostCategory.create({ postId, categoryId });

    return postCategory;
  }));

  return postCategories;
}

module.exports = {
  create,
};
