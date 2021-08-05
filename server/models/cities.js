const { Schema, model } = require("mongoose");

const CitiesSchema = Schema({
  name: {
    type: String,
    required: [true, "The name is mandatory"],
  },
  country: {
    type: String,
    required: [true, "The country is mandatory"],
  },
  img: {
    type: String,
    required: [true, "The url of the image is mandatory"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

CitiesSchema.methods.toJSON = function () {
  const { __v, _id, ...city } = this.toObject();
  city.uid = _id;
  return city;
};

module.exports = model("Cities", CitiesSchema);
