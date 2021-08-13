const { response, request } = require('express');
const repositories = require('./repositories');

const getLikes = async (req = request, res = response) => {
  const { _id: idUser } = req.user;
  const { id: idItinery } = req.params;

  repositories
    .getLikes(idItinery)
    .then((itinerary) => {
      // eslint-disable-next-line max-len
      const userLikeCheck = itinerary.usersLike.find((id) => id === idUser);

      res.status(200).json({
        success: true,
        response: { likes: itinerary.likes, liked: !!userLikeCheck },
      });
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  getLikes,
};
