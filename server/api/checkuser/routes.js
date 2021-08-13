const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validate_jwt');
const controllers = require('./controllers');

const router = Router();

router.get('/:id', validateJWT, controllers.getCommentsAndLike);

module.exports = router;
