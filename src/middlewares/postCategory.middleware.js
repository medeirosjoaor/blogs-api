const CategoryService = require('../services/category.service');

function validateTitle(request, response, next) {
  const { body: { title } } = request;

  if (!title) {
    return response.status(400).send({ message: 'Some required fields are missing' });
  }

  next();
}

function validateContent(request, response, next) {
  const { body: { content } } = request;

  if (!content) {
    return response.status(400).send({ message: 'Some required fields are missing' });
  }

  next();
}

async function validateCategoryIds(request, response, next) {
  const { body: { categoryIds } } = request;

  if (!categoryIds) {
    return response.status(400).send({ message: 'Some required fields are missing' });
  }

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
  validateTitle,
  validateContent,
  validateCategoryIds,
};
