const Cities = require('./model');

const create = async (data) => {
  const cities = new Cities(data);

  await cities.save();
};

const getAll = async () => Cities.find({ status: true });

module.exports = {
  create,
  getAll,
};
