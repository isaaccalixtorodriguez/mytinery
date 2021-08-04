const { Router } = require("express");
const router = Router();

const { get } = require("../controllers/cities");

router.get("/test", get);

module.exports = router;
