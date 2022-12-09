const { Op } = require('sequelize');

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

async function getAllByName(q) {
  const posts = await BlogPost.findAll({
    include: [
      { as: 'user', attributes: { exclude: ['password'] }, model: User },
      { as: 'categories', model: Category, through: { attributes: [] } },
    ],
    where: { 
      [Op.or]: [
        { title: { [Op.like]: `%${q}%` } }, 
        { content: { [Op.like]: `%${q}%` } },
      ], 
    },
  });

  return posts;
}

async function findById(id) {
  const post = await BlogPost.findAll({
    include: [
      { as: 'user', attributes: { exclude: ['password'] }, model: User },
      { as: 'categories', model: Category, through: { attributes: [] } },
    ],
    where: { id },
  });

  return post;
}

async function update({ id, title, content }) {
  const post = BlogPost.update({ title, content }, { where: { id } });

  return post;
}

module.exports = {
  create,
  getAll,
  getAllByName,
  findById,
  update,
};
