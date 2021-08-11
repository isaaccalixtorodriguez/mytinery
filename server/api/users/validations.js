const { check } = require('express-validator');
const { captureChecks } = require('../../middlewares/validate_data');
const { existUserByEmail } = require('./repositories');

const existUser = async (email) => {
  const exist = await existUserByEmail(email);

  if (exist) {
    throw new Error('There is a user with this email');
  }
};

const create = [
  check('name', 'The title is required').not().isEmpty(),
  check('email', 'The email is required').not().isEmpty(),
  check('password', 'The password is required').not().isEmpty(),
  check('email').custom(existUser),
  captureChecks,
];

const login = [
  check('email', 'The email is required').not().isEmpty(),
  check('password', 'The password is required').not().isEmpty(),
  captureChecks,
];

module.exports = {
  create,
  login,
};
