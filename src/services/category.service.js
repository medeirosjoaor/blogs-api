const { Category } = require('../models');

async function create(name) {
  const category = await Category.create({ name });

  return category;
}

async function getAll() {
  const categories = await Category.findAll();

  return categories;
}

module.exports = {
  create,
  getAll,
};
