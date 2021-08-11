const bcrypt = require('bcrypt');
const Users = require('./model');

const create = async (data) => {
  const users = new Users(data);
  const salt = bcrypt.genSaltSync();
  users.password = bcrypt.hashSync(users.password, salt);

  const res = await users.save();
  return res;
};

const existUserByEmail = async (email) => {
  const user = await Users.exists({ email });
  return user;
};

const getUserByEmail = async (email) => {
  const user = await Users.findOne({ email });
  return user;
};

const getUserById = async (id) => {
  const user = await Users.findById(id);
  return user;
};

module.exports = {
  create,
  existUserByEmail,
  getUserByEmail,
  getUserById,
};
