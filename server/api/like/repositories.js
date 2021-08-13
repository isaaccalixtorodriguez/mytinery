const Itineraries = require('../itineraries/model');

const getLikes = async (id) => {
  const res = await Itineraries.findById(id);

  return res;
};

module.exports = {
  getLikes,
};
