const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const {
    name, email, password,
  } = req.body;

  repositories
    .create({
      name, email, password,
    })
    .then((user) => res.status(200).json({ ok: true, response: user }))
    .catch((error) => res.status(500).json({ ok: false, response: 'Internal Server Error', error }));
};

module.exports = {
  create,
};
