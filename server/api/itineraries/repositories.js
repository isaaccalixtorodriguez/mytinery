const Itinerary = require('./model');
const Cities = require('../cities/model');

const create = async (data) => {
  const itinerary = new Itinerary(data);

  const res = await itinerary.save();
  return res;
};

const getAll = async () => {
  let itineraries = await Itinerary.find({});
  itineraries = Cities.populate(itineraries, { path: 'cityId' });
  return itineraries;
};

const getAllByCity = async (id) => {
  let itineraries = await Itinerary.find({ cityId: id });
  itineraries = Cities.populate(itineraries, { path: 'cityId' });
  return itineraries;
};

const getCityById = async (id) => {
  let res = Object;
  await Cities.findById(id, (error, data) => {
    res = data;
  });

  return res;
};

module.exports = {
  create,
  getAll,
  getAllByCity,
  getCityById,
};
