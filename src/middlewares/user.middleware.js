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

function validateDisplayName(request, response, next) {
  const { body: { displayName } } = request;

  if (displayName.length < 8) {
    return response
      .status(400)
      .send({ message: '"displayName" length must be at least 8 characters long' });
  }

  next();
}

async function validateEmail(request, response, next) {
  const { body: { email } } = request;

  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    return response.status(400).send({ message: '"email" must be a valid email' });
  }

  const user = await UserService.findByEmail(email);

  if (user) {
    return response.status(409).send({ message: 'User already registered' });
  }

  next();
}

function validatePassword(request, response, next) {
  const { body: { password } } = request;

  if (password.length < 6) {
    return response
      .status(400)
      .send({ message: '"password" length must be at least 6 characters long' });
  }

  next();
}

module.exports = {
  validateLogin,
  validateDisplayName,
  validateEmail,
  validatePassword,
};
