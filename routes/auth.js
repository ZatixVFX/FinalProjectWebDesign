// auth.js file is used for:
// Login user, authentication and Route to check if user is logged in
// users.js is a Register Route
const express = require("express");
const router = express.Router();

// @router      GET api/auth
// @desc        Get logged in user
// @access      Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @router      POST api/auth
// @desc        Auth user & get token
// @access      Public
router.post("/", (req, res) => {
  res.send("Log in user");
});

module.exports = router;
