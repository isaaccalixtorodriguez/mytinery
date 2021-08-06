const { check } = require('express-validator');
const Cities = require('./model');
const { captureChecks } = require('../../middlewares/validate_data');

const isCitieEqual = async (body) => {
  const { name, country } = body;
  const isExist = await Cities.find({ name, country });

  if (isExist.length > 0) {
    throw new Error('The city is already registered for this country');
  }
};

const validations = [
  check('name', 'The name is required').not().isEmpty(),
  check('country', 'The country is required').not().isEmpty(),
  check('img', 'The url of the image is required').not().isEmpty(),
  check('').custom(isCitieEqual),
  captureChecks,
];

module.exports = validations;
