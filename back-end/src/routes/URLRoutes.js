const express = require("express");

const router = express.Router();

const URLController = require("../controller/URLController");

router.get("/:id_url", URLController.findURL);
router.post("/generateShortenedURL", URLController.generateShortenedURL);
router.post("/listGeneratedURL/:id", URLController.listGeneratedURL);

module.exports = router;
