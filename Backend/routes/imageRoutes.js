const express = require("express");
const router = express.Router();

const { streamImage } = require("../controllers/imageController");

// /images/:folder/:file
router.get("/:folder/:file", streamImage);

module.exports = router;
