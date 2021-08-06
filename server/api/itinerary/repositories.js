const Itinerary = require('./model');

const create = async (data) => {
  const itinerary = new Itinerary(data);

  const res = await itinerary.save();
  return res;
};

const getAll = async (id) => Itinerary.find({ cityId: id });

module.exports = {
  create,
  getAll,
};
