const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validate_data");
const router = Router();

const cities = require("../controllers/cities");
const { isCitieEqual } = require("../helpers/validate_custom_db");

router.post(
  "/",
  [
    check("name", "The name is mandatory").not().isEmpty(),
    check("country", "The country is mandatory").not().isEmpty(),
    check("img", "The url of the image is mandatory").not().isEmpty(),
    check("").custom(isCitieEqual),
    validateFields,
  ],
  cities.post
);
router.get("/all", cities.getAll);

module.exports = router;
