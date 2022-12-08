const { BlogPost } = require('../models');

async function create({ userId, title, content }) {
  const now = Date.now();

  const post = await BlogPost.create({ userId, title, content, published: now, updated: now });

  return post;
}

module.exports = {
  create,
};
