const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router.post('/', controllers.create);
router.get('/all', controllers.getAll);
router.get('/:city', controllers.getItineraryForCity);

module.exports = router;
