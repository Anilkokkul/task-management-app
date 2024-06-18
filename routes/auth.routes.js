const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controller");

const router = express.Router();

//User Registration route
router.post("/register", registerUser);

//User login route
router.post("/login", loginUser);

module.exports = router;
