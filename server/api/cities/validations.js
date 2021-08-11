const { check } = require('express-validator');
const Cities = require('./model');
const { captureChecks } = require('../../middlewares/validate_data');

const isCityEqual = async (body) => {
  const { name, country } = body;
  const isExist = await Cities.find({ name, country });

  if (isExist.length > 0) {
    throw new Error('The city is already registered for this country');
  }
};

const create = [
  check('name', 'The name is required').not().isEmpty(),
  check('country', 'The country is required').not().isEmpty(),
  check('img', 'The url of the image is required').not().isEmpty(),
  check('').custom(isCityEqual),
  captureChecks,
];

module.exports = {
  create,
};
