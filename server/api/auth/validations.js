const { check } = require('express-validator');
const { captureChecks } = require('../../middlewares/validate_data');

const login = [
  check('email', 'The email is required').not().isEmpty(),
  check('password', 'The password is required').not().isEmpty(),
  captureChecks,
];

module.exports = {
  login,
};
