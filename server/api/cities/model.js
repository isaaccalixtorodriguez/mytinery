const { Schema, model } = require('mongoose');

const CitiesSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
  country: {
    type: String,
    required: [true, 'The country is required'],
  },
  img: {
    type: String,
    required: [true, 'The url of the image is required'],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// eslint-disable-next-line func-names
CitiesSchema.methods.toJSON = function () {
  const {
    __v, status, ...city
  } = this.toObject();
  return city;
};

module.exports = model('Cities', CitiesSchema);
