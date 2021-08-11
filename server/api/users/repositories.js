const Users = require('./model');

const create = async (data) => {
  const users = new Users(data);

  const res = await users.save();
  return res;
};

module.exports = {
  create,
};
