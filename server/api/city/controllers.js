const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const { name, country, img } = req.body;

  repositories
    .create({ name, country, img })
    .then((city) => res.status(200).send(city))
    .catch(() => res.status(500).send({ error: 'Internal Server Error' }));
};

const getAll = async (req, res = response) => {
  repositories
    .getAll()
    .then((cities) => res.status(200).send(cities))
    .catch(() => res.status(500).send({ error: 'Internal Server Error' }));
};

module.exports = {
  create,
  getAll,
};
