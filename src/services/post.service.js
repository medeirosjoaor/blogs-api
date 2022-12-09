const { BlogPost } = require('../models');

async function create({ userId, title, content }) {
  const now = Date.now();

  const post = await BlogPost.create({ userId, title, content, published: now, updated: now });

  return post;
}

async function destroy(id) {
  await BlogPost.destroy({ where: { id } });
}

async function findById(id) {
  const post = await BlogPost.findByPk(id);

  return post;
}

module.exports = {
  create,
  destroy,
  findById,
};
