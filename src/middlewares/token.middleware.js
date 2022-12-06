const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'Travis Scott';

async function validateToken(request, response, next) {
  const token = request.header('Authorization');

  if (!token) {
    return response.status(401).send({ message: 'Token not found' });
  }

  try {
    const { email } = jwt.verify(token, secret);

    const user = UserService.findByEmail(email);

    if (!user) {
      return response.status(401).send({ message: 'Expired or invalid token' });
    }

    next();
  } catch (_) {
    return response.status(401).send({ message: 'Expired or invalid token' });
  }
}

module.exports = {
  validateToken,
};
