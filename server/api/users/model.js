const { Schema, model } = require('mongoose');

const UsersSchema = Schema({
  firstName: {
    type: String,
    required: [true, 'The first name is required'],
  },
  lastName: {
    type: String,
    required: [true, 'The last name is required'],
  },
  email: {
    type: String,
    required: [true, 'The email is required'],
    unique: true,
  },
  userPic: {
    type: String,
    required: [true, 'The user picture is required'],
  },
  country: {
    type: String,
    required: [true, 'The country is required'],
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
    __v, status, password, ...user
  } = this.toObject();
  return user;
};

module.exports = model('Users', UsersSchema);
