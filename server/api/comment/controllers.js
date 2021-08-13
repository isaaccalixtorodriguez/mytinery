const { response, request } = require('express');
const repositories = require('./repositories');

const remove = async (req = request, res = response) => {
  const { _id: userId } = req.user;
  const { id: idComment } = req.params;

  repositories
    .remove(idComment, userId)
    .then((data) => {
      res.status(200).json({
        success: true,
        response: data,
      });
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

const update = async (req = request, res = response) => {
  const { _id: userId } = req.user;
  const { text } = req.body;
  const { id: idComment } = req.params;

  repositories
    .update(idComment, userId, text)
    .then((data) => {
      res.status(200).json({
        success: true,
        response: data,
      });
    })
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  remove,
  update,
};
