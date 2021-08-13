const { response, request } = require('express');
const repositories = require('./repositories');

const create = async (req = request, res = response) => {
  const {
    title,
    img,
    activities,
    authorName,
    authorPic,
    price,
    duration,
    likes,
    hashtags,
    comments,
    usersLike,
    cityId,
  } = req.body;

  repositories
    .create({
      title,
      img,
      activities,
      authorName,
      authorPic,
      price,
      duration,
      likes,
      hashtags,
      comments,
      usersLike,
      cityId,
    })
    .then((itinerary) => res.status(200).json({ ok: true, response: itinerary }))
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

const getAll = async (req, res = response) => {
  repositories
    .getAll()
    .then((itineraries) => res.status(200).json(
      { ok: true, total: itineraries.length, response: itineraries },
    ))
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

const getItinerariesByCity = async (req = request, res = response) => {
  const { city } = (req.params);
  repositories
    .getAllByCity(city)
    .then((itinerary) => res.status(200).json({ ok: true, response: itinerary }))
    .catch(() => res.status(500).json({ ok: false, response: 'Internal Server Error' }));
};

module.exports = {
  create,
  getAll,
  getItinerariesByCity,
};
