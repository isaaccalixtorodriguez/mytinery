const { response, request } = require('express');
const repositories = require('./repositories');

const createComment = async (req = request, res = response) => {
  const {
    _id: idUser, firstName, lastName, userPic,
  } = req.user;
  const { text } = req.body;
  const { id: idItinery } = req.params;

  repositories
    .createComment(idItinery, text, {
      idUser, firstName, lastName, userPic,
    })
    .then(() => {
      repositories.getComments(idItinery)
        .then((data) => {
          const commentsIds = [];
          data.comments.forEach(({ userId, _id: id }) => {
            if (String(userId) === String(idUser)) {
              commentsIds.push(id);
            }
          });
          res.status(200).json({
            success: true,
            response: { response: data.comments, arrayOwnerCheck: commentsIds },
          });
        })
        .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  createComment,
};
