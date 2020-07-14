const mongoose = require("mongoose");

const ReservationFormSchema = mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  guests: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  special_occasion: {
    type: String,
    default: "None",
  },
  message: {
    type: String,
  },
  DateSubmited: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ReservationForm", ReservationFormSchema);
