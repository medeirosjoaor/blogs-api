const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

const secret = process.env.JWT_SECRET || 'Travis Scott';
const options = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

async function findByEmail(request, response) {
  try {
    const { body: { email } } = request;

    const { dataValues } = await UserService.findByEmail(email);

    delete dataValues.password;

    const token = jwt.sign(dataValues, secret, options);

    return response.status(200).send({ token });
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

async function create(request, response) {
  try {
    const { body: { displayName, email, image, password } } = request;

    const { dataValues } = await UserService.create({ displayName, email, image, password });

    delete dataValues.password;

    const token = jwt.sign(dataValues, secret, options);

    return response.status(201).send({ token });
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

async function getAll(request, response) {
  const users = await UserService.getAll();

  return response.status(200).send(users);
}

async function findById(request, response) {
  const { params: { id } } = request;

  const user = await UserService.findById(id);

  if (!user) {
    return response.status(404).send({ message: 'User does not exist' });
  }

  return response.status(200).send(user);
}

module.exports = {
  findByEmail,
  create,
  getAll,
  findById,
};
