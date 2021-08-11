const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const { name, country, img } = req.body;

  repositories
    .create({ name, country, img })
    .then((city) => res.status(200).json({ ok: true, response: city }))
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

const getCity = async (req = request, res = response) => {
  const { name } = req.query;

  repositories
    .getCity(name)
    .then((city) => res.status(200).json({ ok: true, response: city }))
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

const getAll = async (req, res = response) => {
  repositories
    .getAll()
    .then((cities) => res.status(200).json({ ok: true, total: cities.length, response: cities }))
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  create,
  getCity,
  getAll,
};
