const Itineraries = require('../itineraries/model');

const createComment = async (idItinery, comment, user) => {
  const res = await Itineraries.findById(idItinery).update(
    { _id: idItinery },
    {
      $push: {
        comments: {
          userId: user.userId,
          text: comment,
          userName: `${user.firstName} ${user.lastName}`,
          userPic: user.userPic,
        },
      },
    },
  );
  return res;
};

const getComments = async (idItinery) => {
  const res = await Itineraries.findById(idItinery);
  return res;
};

module.exports = {
  createComment,
  getComments,
};
