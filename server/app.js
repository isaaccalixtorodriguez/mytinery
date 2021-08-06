require('dotenv').config();
const Server = require('./api/server');

const server = new Server();

server.listen();
