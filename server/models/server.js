const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.connectionDataBase();
    this.middlewares();
    this.routes();
  }

  async connectionDataBase() {
    await connection();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("tiny"));
  }

  routes() {
    this.app.use("/citie", require("../routes/cities"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening at http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
