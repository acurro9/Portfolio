const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/aboutMe", (req, res) => {
  res.render("aboutMe");
});

module.exports = router;
