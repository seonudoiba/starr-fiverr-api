const express = require("express");
const { getfav, createfav } = require("../controller/favs.js");

const router = express.Router();

router.get("/", getfav);
router.post("/", createfav);

module.exports = router;
