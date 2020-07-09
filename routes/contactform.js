// contactform.js to let users contact us
const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");

const ContactForm = require("../models/ContactForm");

// @router      Post api/contactform
// @desc        user being able to contact us
// @access      Public
router.post(
  "/",
  [
    check("name", "Please add name").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("message", "Please add your message").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;

    try {
      contactform = new ContactForm({
        name,
        email,
        message,
      });

      await contactform.save();

      res.json({ contactform });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
