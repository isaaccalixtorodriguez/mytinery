const jwt = require('jsonwebtoken');

const generateJWT = (payload) => new Promise((resolve, reject) => {
  jwt.sign(payload, process.env.PRIVATE_KEY, {
    expiresIn: '4h',
  }, (error, token) => {
    if (error) {
      // eslint-disable-next-line prefer-promise-reject-errors
      reject('Error when generating token');
    } else {
      resolve(token);
    }
  });
});

module.exports = {
  generateJWT,
};
