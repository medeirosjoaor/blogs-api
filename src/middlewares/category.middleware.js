function validateName(request, response, next) {
  const { body: { name } } = request;

  if (!name) {
    return response.status(400).send({ message: '"name" is required' });
  }

  next();
}

module.exports = {
  validateName,
};
