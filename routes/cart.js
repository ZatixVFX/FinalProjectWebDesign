// users.js is a Register Route
const express = require("express");
const router = express.Router();

// @router      GET api/cart
// @desc        Get cart items
// @access      Private
router.get("/", (req, res) => {
  res.send("Get all cart items");
});

// @router      POST api/cart
// @desc        add item to cart
// @access      Private
router.post("/", (req, res) => {
  res.send("Add item to cart");
});

// @router      DELETE api/cart/:id
// @desc        Delete item from cart
// @access      Private
router.delete("/:id", (req, res) => {
  res.send("Delete item from cart");
});

module.exports = router;
