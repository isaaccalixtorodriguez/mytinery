const Itineraries = require('../itineraries/model');

const getCommentsAndLike = async (id) => {
  const res = await Itineraries.findById(id);

  return res;
};

module.exports = {
  getCommentsAndLike,
};
