// server/routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const {
  addBooking,
  getBookingByID,
  getTest,
} = require("../controllers/bookingController");

// Define routes
router.post("/confirm-booking", addBooking);
router.get("/booking/:userId", getBookingByID); // Fixed route path
router.get("/test", getTest);

module.exports = router;
