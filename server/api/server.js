const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./router');
const { connection } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.connectionDataBase();
    this.middlewares();
    this.routes();
  }

  // eslint-disable-next-line class-methods-use-this
  async connectionDataBase() {
    await connection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('tiny'));
  }

  routes() {
    this.app.use('/city', router.city);
    this.app.use('/user', router.user);
    this.app.use('/itineraries', router.itinerary);
  }

  listen() {
    this.app.listen(this.port, () => {
      process.stdout.write(`App listening at http://localhost:${this.port}\n`);
    });
  }
}

module.exports = Server;
