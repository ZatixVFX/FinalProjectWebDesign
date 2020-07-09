// users.js is a Register Route
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");
const Cart = require("../models/Cart");

// @router      GET api/cart
// @desc        Get cart items
// @access      Private
router.get("/", auth, async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user.id }).sort({ date: -1 });
    res.json(cart);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @router      POST api/cart
// @desc        add item to cart
// @access      Private
router.post(
  "/",
  [
    auth,
    [
      check("item", "Item is required").not().isEmpty(),
      check("price", "price is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { item, price } = req.body;

    try {
      const newCart = new Cart({
        item,
        price,
        user: req.user.id,
      });

      const cart = await newCart.save();

      res.json(cart);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @router      DELETE api/cart/:id
// @desc        Delete item from cart
// @access      Private
router.delete("/:id", auth, async (req, res) => {
  try {
    let cart = await Cart.findById(req.params.id);

    if (!cart) return res.status(404).json({ msg: "Cart item not found" });

    // Make sure user owns cart items
    if (cart.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: "Not authorized" });
    }

    await Cart.findByIdAndRemove(req.params.id);

    res.json({ msg: "Cart item removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
