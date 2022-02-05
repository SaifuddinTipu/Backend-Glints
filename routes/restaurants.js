const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurants");
const validator = require("../middleware/validator");
const { handleError } = require("../middleware/errorHandlerMiddleware");

router.get(
  "/list-all-restaurants",
  validator.list_all_restaurants,
  restaurantController.list_all_restaurants,
  handleError
);
router.get(
  "/list-top-restaurants",
  validator.list_top_restaurants,
  restaurantController.list_top_restaurants,
  handleError
);
router.get(
  "/search-restaurants",
  validator.search_restaurants,
  restaurantController.search_restaurants,
  handleError
);


module.exports = router;
