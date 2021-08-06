const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const {
    title,
    img,
    authorName,
    authorPic,
    price,
    duration,
    comments,
    cityId,
  } = req.body;

  repositories
    .create({
      title,
      img,
      authorName,
      authorPic,
      price,
      duration,
      comments,
      cityId,
    })
    .then((itinerary) => res.status(200).send(itinerary))
    .catch((error) => res.status(500).send({ error: 'Internal Server Error', message: error }));
};

const getAll = async (req, res = response) => {
  repositories
    .getAll()
    .then((itinerary) => res.status(200).send(itinerary))
    .catch(() => res.status(500).send({ error: 'Internal Server Error' }));
};

const getItineraryForCity = async (req = request, res = response) => {
  const { city } = (req.params);
  repositories
    .getAll(city)
    .then((itineraries) => res.status(200).send({ itineraries }))
    .catch(() => res.status(500).send({ error: 'Internal Server Error' }));
};

module.exports = {
  create,
  getAll,
  getItineraryForCity,
};
