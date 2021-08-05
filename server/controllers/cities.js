const { response, request, json } = require("express");
const Cities = require("../models/cities");

const post = async (req = request, res = response) => {
  const { name, country, img } = req.body;
  const cities = new Cities({ name, country, img });

  cities
    .save()
    .then((city) => res.status(200).send(city))
    .catch((error) =>
      json.status(500).send({ error: "Internal Server Error" })
    );
};

const getAll = async (req = request, res = response) => {
  Cities.find({ status: true })
    .then((cities) => res.status(200).send(cities))
    .catch((error) => res.status(500).send({ error: "Internal Server Error" }));
};

module.exports = {
  post,
  getAll,
};
