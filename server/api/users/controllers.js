const { response, request } = require('express');
const bcrypt = require('bcrypt');
const repositories = require('./repositories');
const { getUserByEmail } = require('./repositories');
const { generateJWT } = require('../../helpers/generate_jwt');

const create = async (req = request, res = response) => {
  const {
    name, email, password,
  } = req.body;

  repositories
    .create({
      name, email, password,
    })
    .then((user) => res.status(200).json({ ok: true, response: user }))
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

    res.status(200).json({ success: true, response: { user, token } });
  } catch (error) {
    res.status(500).json({ ok: false, response: 'Contact the administrator' });
  }
};

module.exports = {
  create,
  login,
};
