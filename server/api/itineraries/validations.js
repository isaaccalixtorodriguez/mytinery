const { check, param } = require('express-validator');
const { captureChecks } = require('../../middlewares/validate_data');
const { getCityById } = require('./repositories');

const existCity = async (id) => {
  const exist = await getCityById(id);

  if (!exist) {
    throw new Error('The city is already registered for this country');
  }
};

const create = [
  check('title', 'The title is required').not().isEmpty(),
  check('img', 'The url of the image is required').not().isEmpty(),
  check('authorName', 'The author name is required').not().isEmpty(),
  check('authorPic', 'The author pic is required').not().isEmpty(),
  check('price', 'The price is required').not().isEmpty().isLength({ min: 1, max: 5 }),
  check('duration', 'The duration is required').not().isEmpty().isLength({ min: 1 }),
  check('cityId', 'The url of the image is required').not().isEmpty(),
  captureChecks,
];

const itinerariesByCity = [
  param('city').custom(existCity),
  captureChecks,
];

module.exports = {
  create,
  itinerariesByCity,
};
