// Date formater
const moment = require("moment");

// contactform.js to let users contact us
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const config = require("config");
const creds = require("../config/nodemailerCreds");
const { check, validationResult } = require("express-validator");

const ReservationForm = require("../models/ReservationForm");

// @router      GET api/reservationform
// @desc        Get reservationform
// @access      Private
router.get("/", async (req, res) => {
  try {
    const reservationform = await ReservationForm.find().sort({ date: -1 });
    res.json(reservationform);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @router      Post api/reservationform
// @desc        user being able make a reservation
// @access      Public
router.post(
  "/",
  [
    check("date", "Please enter a date for reservation").not().isEmpty(),
    check("guests", "Please enter amount of guests").isInt(),
    check("time", "Please enter a time for reservation").not().isEmpty(),
    check("fullname", "Please enter your fullname").not().isEmpty(),
    check("email", "Please enter an email").isEmail(),
    check("phone", "Please enter a phone number with 10 digits")
      .isLength({ min: 10, max: 10 })
      .isInt(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      date,
      guests,
      time,
      fullname,
      email,
      phone,
      special_occasion,
      message,
    } = req.body;

    try {
      reservationform = new ReservationForm({
        date,
        guests,
        time,
        fullname,
        email,
        phone,
        special_occasion,
        message,
      });

      await reservationform.save();

      res.json({ reservationform });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
