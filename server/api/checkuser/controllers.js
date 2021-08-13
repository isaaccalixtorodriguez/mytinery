const { response, request } = require('express');
const repositories = require('./repositories');

const getCommentsAndLike = async (req = request, res = response) => {
  const { _id: idUser } = req.user;
  const { id: idItinery } = req.params;

  repositories
    .getCommentsAndLike(idItinery)
    .then((itinerary) => {
      // eslint-disable-next-line max-len
      const userComments = itinerary.comments.filter((comment) => String(comment.userId) === idUser);
      const userLikeCheck = itinerary.usersLike.find((id) => id === idUser);

      res.status(200).json({
        success: true,
        response: { arrayOwnerCheck: userComments, likedChek: !!userLikeCheck },
      });
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  getCommentsAndLike,
};
