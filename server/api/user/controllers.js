const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const {
    firstname, lastname, email, password,
  } = req.body;

  repositories
    .create({
      firstname, lastname, email, password,
    })
    .then((user) => res.status(200).send({ user }))
    .catch(() => res.status(500).send({ error: 'Internal Server Error' }));
};

module.exports = {
  create,
};
