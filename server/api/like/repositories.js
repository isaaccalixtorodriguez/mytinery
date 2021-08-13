const Itineraries = require('../itineraries/model');

const getLikes = async (id) => {
  const res = await Itineraries.findById(id);

  return res;
};

const like = async (idItinery, userId) => {
  let userLikeCheck = Object;
  let countLike = Object;

  await getLikes(idItinery)
    .then((itinerary) => {
      userLikeCheck = itinerary.usersLike.find((id) => String(id) === String(userId));
      userLikeCheck = !!userLikeCheck;
      countLike = itinerary.likes;
    });

  const type = userLikeCheck ? '$pull' : '$push';
  const res = await Itineraries.findById(idItinery).update(
    { _id: idItinery },
    {
      [type]: {
        usersLike: userId,
      },
      $set: {
        likes: userLikeCheck ? `${Number(countLike) - 1}` : `${Number(countLike) + 1}`,
      },
    },
  );

  return res;
};

module.exports = {
  getLikes,
  like,
};
