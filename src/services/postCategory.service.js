const { PostCategory } = require('../models');
const { BlogPost } = require('../models');
const { User } = require('../models');
const { Category } = require('../models');

async function create({ categoryIds, postId }) {
  const postCategories = await Promise.all(categoryIds.map((categoryId) => {
    const postCategory = PostCategory.create({ postId, categoryId });

    return postCategory;
  }));

  return postCategories;
}

async function getAll() {
  const posts = await BlogPost.findAll({
    include: [
      { as: 'user', attributes: { exclude: ['password'] }, model: User },
      { as: 'categories', model: Category, through: { attributes: [] } },
    ],
  });

  return posts;
}

module.exports = {
  create,
  getAll,
};
