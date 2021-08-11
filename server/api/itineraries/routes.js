const { Router } = require('express');
const controllers = require('./controllers');
const validations = require('./validations');

const router = Router();

router.post('/', validations.create, controllers.create);
router.get('/all', controllers.getAll);
router.get('/:city', validations.itinerariesByCity, controllers.getItinerariesByCity);

module.exports = router;
