const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'Travis Scott';
const options = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

async function findByEmail(request, response) {
  try {
    const { body: { email } } = request;

    const token = jwt.sign({ email }, secret, options);

    return response.status(200).send({ token });
  } catch ({ message }) {
    return response.status(500).send({ message });
  }
}

module.exports = {
  findByEmail,
};
