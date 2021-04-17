const express = require("express");

const router = express.Router();

const UserController = require("../controller/UserController");

router.post("/create", UserController.create);
router.post("/login", UserController.login);

module.exports = router;
