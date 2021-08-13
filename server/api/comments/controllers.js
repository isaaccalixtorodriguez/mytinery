const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const {
    _id: userId, firstName, lastName, userPic,
  } = req.user;
  const { text } = req.body;
  const { id: idItinery } = req.params;

  repositories
    .createComment(idItinery, text, {
      userId, firstName, lastName, userPic,
    })
    .then(() => {
      repositories.getComments(idItinery)
        .then((data) => {
          // eslint-disable-next-line max-len
          const comments = data.comments.filter((comment) => String(comment.userId) === String(userId));
          res.status(200).json({
            success: true,
            response: { response: data.comments, arrayOwnerCheck: comments },
          });
        })
        .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  create,
};
