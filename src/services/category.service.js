const { Category } = require('../models');

async function create(name) {
  const category = await Category.create({ name });

  return category;
}

async function getAll() {
  const categories = await Category.findAll();

  return categories;
}

async function findyById(id) {
  const category = await Category.findByPk(id);

  return category;
}

module.exports = {
  create,
  getAll,
  findyById,
};
