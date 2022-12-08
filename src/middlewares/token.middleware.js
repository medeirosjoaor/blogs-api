const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');
const PostCategoryService = require('../services/postCategory.service');

const secret = process.env.JWT_SECRET || 'Travis Scott';

async function validateToken(request, response, next) {
  const token = request.header('Authorization');

  if (!token) {
    return response.status(401).send({ message: 'Token not found' });
  }

  try {
    const { email } = jwt.verify(token, secret);

    const { dataValues } = await UserService.findByEmail(email);

    if (!dataValues) {
      return response.status(401).send({ message: 'Expired or invalid token' });
    }

    request.user = dataValues;

    next();
  } catch (_) {
    return response.status(401).send({ message: 'Expired or invalid token' });
  }
}

async function validateUser(request, response, next) {
  const { params: { id } } = request;
  const { user } = request;
  
  const [post] = await PostCategoryService.findById(id);

  if (user.id !== post.userId) {
    return response.status(401).send({ message: 'Unauthorized user' });
  }

  next();
}

module.exports = {
  validateToken,
  validateUser,
};
