const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validate_jwt');
const controllers = require('./controllers');
const validation = require('./validation');

const router = Router();

router.post('/', [validateJWT, validation.create], controllers.create);

module.exports = router;
