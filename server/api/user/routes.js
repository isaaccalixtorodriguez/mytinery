const { Router } = require('express');
const controllers = require('./controllers');

const router = Router();

router.post('/', controllers.create);

module.exports = router;
