const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
} = require("../controllers/auth.controller");

const router = express.Router();

//User Registration route
router.post("/register", registerUser);

//User login route
router.post("/login", loginUser);

//User logout route
router.get("/logout", logoutUser);

module.exports = router;
