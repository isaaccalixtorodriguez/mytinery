const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validate_jwt');
const controllers = require('./controllers');

const router = Router();

router.delete('/:id', validateJWT, controllers.remove);
router.put('/:id', validateJWT, controllers.update);

module.exports = router;
