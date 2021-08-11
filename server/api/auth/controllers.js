/* eslint-disable consistent-return */
const { response } = require('express');
const bcrypt = require('bcrypt');
const { generateJWT } = require('../../helpers/generate_jwt');
const { getUserByEmail } = require('./repositories');

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

    const token = await generateJWT(user.id);

    res.json({
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({ ok: false, response: 'Contact the administrator' });
  }
};

module.exports = {
  login,
};
