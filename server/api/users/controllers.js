const { response, request } = require('express');
const bcrypt = require('bcrypt');
const repositories = require('./repositories');
const { getUserByEmail } = require('./repositories');
const { generateJWT } = require('../../helpers/generate_jwt');

const create = async (req = request, res = response) => {
  const {
    firstName, lastName, email, password, userPic, country,
  } = req.body;

  repositories
    .create({
      firstName, lastName, email, password, userPic, country,
    })
    .then((user) => res.status(200).json({ success: true, response: user }))
    .catch((error) => res.status(500).json({ ok: false, response: 'Internal Server Error', error }));
};

// eslint-disable-next-line consistent-return
const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);
    const validationPassword = bcrypt.compareSync(password, user.password);

    if (!user) {
      return res.status(400).json({ ok: false, response: 'User or password are not correct' });
    }

    if (!user.status) {
      return res.status(400).json({ ok: false, response: 'User or password are not correct' });
    }

    if (!validationPassword) {
      return res.status(400).json({ ok: false, response: 'User or password are not correct' });
    }

    const token = await generateJWT({ id: user.id, userPic: user.userPic });

    res.status(200).json({
      success: true,
      response: {
        firstName: user.firstName, token, userPic: user.userPic,
      },
    });
  } catch (error) {
    res.status(500).json({ ok: false, response: 'Contact the administrator' });
  }
};

const getData = async (req, res = response) => {
  const { user } = req;
  res.status(200).json({
    success: true,
    response: { userPic: user.userPic, firstName: user.firstName },
  });
};

module.exports = {
  create,
  login,
  getData,
};
