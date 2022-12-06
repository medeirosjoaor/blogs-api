const { User } = require('../models');

async function findByEmail(email) {
  const user = await User.findOne({
    where: { email },
    attributes: ['id', ['display_name', 'displayName'], 'email', 'image', 'password'],
  });

  return user;
}

module.exports = {
  findByEmail,
};
