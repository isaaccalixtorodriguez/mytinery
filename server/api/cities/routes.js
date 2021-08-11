const { Router } = require('express');
const controllers = require('./controllers');
const validations = require('./validations');

const router = Router();

router.post('/', validations, controllers.create);
router.get('/all', controllers.getAll);
router.get('/city', controllers.getCity);

module.exports = router;