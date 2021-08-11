const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
  },
  email: {
    type: String,
    required: [true, 'The email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'The password is required'],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

// eslint-disable-next-line func-names
UsersSchema.methods.toJSON = function () {
  const {
    __v, status, _id, password, ...user
  } = this.toObject();
  user.id = _id;
  return user;
};

module.exports = model('Users', UsersSchema);
