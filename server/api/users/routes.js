const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validate_jwt');
const controllers = require('./controllers');
const validations = require('./validations');

const router = Router();

router.post('/signup', validations.create, controllers.create);
router.post('/signin', validations.login, controllers.login);
router.get('/signinls', validateJWT, controllers.getData);

module.exports = router;
