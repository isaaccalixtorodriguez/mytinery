const { validationResult } = require('express-validator');

const captureChecks = (req, res, next) => {
  const errors = validationResult(req);

  return !errors.isEmpty() ? res.status(400).send(errors) : next();
};

module.exports = {
  captureChecks,
};
