// server/models/Booking.js

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  flightNumber: String,
  origin: {
    code: String,
    city: String,
  },
  destination: {
    code: String,
    city: String,
  },
  departureTime: Date,
  arrivalTime: Date,
  duration: String,
  price: Number,
  cabinClass: String,
  travellers: [
    {
      name: String,
    },
  ],
  paymentDetails: {
    cardNumber: String,
    expiryDate: String,
    cvv: String,
  },
  // userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  userId: String,
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
