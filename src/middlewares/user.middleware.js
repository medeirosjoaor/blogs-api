const UserService = require('../services/user.service');

async function validateLogin(request, response, next) {
  const { body: { email, password } } = request;

  if (!email || !password) {
    return response.status(400).send({ message: 'Some required fields are missing' });
  }

  const user = await UserService.findByEmail(email);

  if (!user || user.password !== password) {
    return response.status(400).send({ message: 'Invalid fields' });
  }

  next();
}

module.exports = {
  validateLogin,
};
