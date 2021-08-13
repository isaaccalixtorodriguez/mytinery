const { response, request } = require('express');
const repositories = require('./repositories');

const getLikes = async (req = request, res = response) => {
  const { _id: idUser } = req.user;
  const { id: idItinery } = req.params;

  repositories
    .like(idItinery, idUser)
    .then(() => {
      repositories.getLikes(idItinery)
        .then((itinerary) => {
          // eslint-disable-next-line max-len
          const userLikeCheck = itinerary.usersLike.find((id) => String(id) === String(idUser));

          res.status(200).json({
            success: true,
            response: { likes: itinerary.likes, liked: !!userLikeCheck },
          });
        })
        .catch((error) => res.status(500).json({ ok: false, response: 'Internal Server Error', error }));
    })
    .catch((error) => res.status(500).json({ ok: false, response: 'Internal Server Error' }, error));
};

module.exports = {
  getLikes,
};
