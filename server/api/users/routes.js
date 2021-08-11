const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validate_jwt');
const controllers = require('./controllers');
const validations = require('./validations');

const router = Router();

router.post('/', [validateJWT, validations.create], controllers.create);
router.post('/signin', validations.login, controllers.login);

module.exports = router;
