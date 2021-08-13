const Itineraries = require('../itineraries/model');

const remove = async (idComment, userId) => {
  let res = Object;
  const existComment = await Itineraries.findOne({ 'comments._id': idComment, 'comments.userId': userId });

  if (existComment) {
    const ItinerariesComments = await Itineraries.findOneAndUpdate(
      { 'comments._id': idComment },
      { $pull: { comments: { _id: idComment } } },
      { new: true },
    );
    res = ItinerariesComments.comments;
  }

  return res;
};

const update = async (idComment, userId, comment) => {
  let res = Object;
  const existComment = await Itineraries.findOne({ 'comments._id': idComment, 'comments.userId': userId });

  if (existComment) {
    const ItinerariesComments = await Itineraries.findOneAndUpdate(
      { 'comments._id': idComment },
      { $set: { 'comments.$.text': comment } },
      { new: true },
    );
    res = ItinerariesComments.comments;
  }

  return res;
};

module.exports = {
  remove,
  update,
};
