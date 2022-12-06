const { User } = require('../models');

async function findByEmail(email) {
  const user = await User.findOne({
    where: { email },
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image', 'password'],
  });

  return user;
}

async function create({ displayName, email, image, password }) {
  const user = await User.create({ displayName, email, image, password });

  return user;
}

async function getAll() {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });

  return users;
}

async function findById(id) {
  const user = await User.findOne({ 
    where: { id }, 
    attributes: { exclude: ['password'] }, 
  });

  return user;
}

module.exports = {
  findByEmail,
  create,
  getAll,
  findById,
};
