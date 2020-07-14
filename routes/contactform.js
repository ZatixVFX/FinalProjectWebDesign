// contactform.js to let users contact us
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const config = require("config");
const creds = require("../config/nodemailerCreds");
const { check, validationResult } = require("express-validator");

const ContactForm = require("../models/ContactForm");

// @router      GET api/contactform
// @desc        Get contactforms
// @access      Private
router.get("/", async (req, res) => {
  try {
    const contactform = await ContactForm.find().sort({ date: -1 });
    res.json(contactform);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

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

      let mail = {
        from: creds.USER,
        replyTo: `${name} ${email}`,
        to: creds.USER, // Change to email address that you want to receive messages on
        subject: "Message",
        text: message,
      };
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
