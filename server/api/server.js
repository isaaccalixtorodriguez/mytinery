const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');
const { connectionDB } = require('../database/config');
require('dotenv').config();

const app = express();
const port = process.env.PORT;
connectionDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

app.use('/cities', router.city);
app.use('/users', router.user);
app.use('/itineraries', router.itinerary);
app.use('/login', router.auth);

module.exports = {
  app,
  port,
};
