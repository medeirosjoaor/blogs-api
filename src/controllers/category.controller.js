const CategoryService = require('../services/category.service');

async function create(request, response) {
  try {
    const { body: { name } } = request;

    const { dataValues } = await CategoryService.create(name);

    return response.status(201).send(dataValues);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

async function getAll(_, response) {
  try {
    const categories = await CategoryService.getAll();

    return response.status(200).send(categories);
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

module.exports = {
  create,
  getAll,
};
