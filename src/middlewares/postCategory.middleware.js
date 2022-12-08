const CategoryService = require('../services/category.service');

function validateFields(request, response, next) {
  const { body: { title, content, categoryIds } } = request;

  if (!title || !content || !categoryIds) {
    return response.status(400).send({ message: 'Some required fields are missing' });
  }

  next();
}

async function validateCategoryIds(request, response, next) {
  const { body: { categoryIds } } = request;

  const categories = await Promise.all(categoryIds.map(async (categoryId) => {
    const category = await CategoryService.findyById(categoryId);

    return category;
  }));

  if (categories.some((category) => !category)) {
    return response.status(400).send({ message: 'one or more "categoryIds" not found' });
  }

  next();
}

module.exports = {
  validateFields,
  validateCategoryIds,
};
