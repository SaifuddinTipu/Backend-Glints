const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const validator = require("../middleware/validator");
const { handleError } = require("../middleware/errorHandlerMiddleware");

router.post(
  "/purchase",
  validator.puchase,
  userController.puchase,
  handleError
);

module.exports = router;