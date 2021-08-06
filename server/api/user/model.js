const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
  firstname: {
    type: String,
    required: [true, 'The first name is required'],
  },
  lastname: {
    type: String,
    required: [true, 'The last name is required'],
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
    __v, _id, password, ...user
  } = this.toObject();
  user.uid = _id;
  return user;
};

module.exports = model('Users', UsersSchema);
