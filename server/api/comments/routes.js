const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validate_jwt');
const controllers = require('./controllers');

const router = Router();

router.post('/:id', validateJWT, controllers.createComment);

module.exports = router;
