const Cities = require('./model');

const create = async (data) => {
  const cities = new Cities(data);
  const res = await cities.save();

  return res;
};

const getCity = async (city) => Cities.find({ name: city });

const getAll = async () => Cities.find({ status: true });

module.exports = {
  create,
  getCity,
  getAll,
};
