const Cities = require("../models/cities");

const isCitieEqual = async (body) => {
  const { name, country } = body;
  const isExist = await Cities.find({ name: name, country: country });

  if (isExist.length > 0) {
    throw new Error("The city is already registered for this country");
  }
};

module.exports = {
  isCitieEqual,
};
