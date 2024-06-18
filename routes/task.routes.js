const express = require("express");

const router = express.Router();

router.get("/task", (req, res) => {
  res.send("Welcome to task page");
});

module.exports = router;
