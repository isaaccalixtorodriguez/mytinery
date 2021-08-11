const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const { getUserById } = require('../api/users/repositories');

// eslint-disable-next-line consistent-return
const validateJWT = async (req = request, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({ ok: false, response: 'No token exists in the request' });
  }

  try {
    const { id } = jwt.verify(token, process.env.PRIVATE_KEY);
    const user = await getUserById(id);

    if (!user) {
      return res.status(401).json({
        msg: 'Token no válido - usuario no existe DB',
      });
    }

    if (!user.status) {
      return res.status(401).json({ ok: false, response: 'No token exists in the request' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(400).json({ ok: false, response: 'Invalid token' });
  }
};

module.exports = {
  validateJWT,
};
