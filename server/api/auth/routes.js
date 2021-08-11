const { Router } = require('express');
const controllers = require('./controllers');
const validations = require('./validations');

const router = Router();

router.post('/', validations.login, controllers.login);

module.exports = router;
