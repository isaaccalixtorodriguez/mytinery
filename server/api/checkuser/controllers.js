const { response, request } = require('express');
const repositories = require('./repositories');

const getCommentsAndLike = async (req = request, res = response) => {
  const { _id: idUser } = req.user;
  const { id: idItinery } = req.params;

  repositories
    .getCommentsAndLike(idItinery)
    .then((itinerary) => {
      // eslint-disable-next-line max-len
      const commentsIds = [];
      itinerary.comments.forEach(({ userId, _id: id }) => {
        if (String(userId) === String(idUser)) {
          commentsIds.push(id);
        }
      });
      const userLikeCheck = itinerary.usersLike.find((id) => id === idUser);

      res.status(200).json({
        success: true,
        response: { arrayOwnerCheck: commentsIds, likedChek: !!userLikeCheck },
      });
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  getCommentsAndLike,
};
