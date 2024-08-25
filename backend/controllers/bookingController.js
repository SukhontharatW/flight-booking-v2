const Booking = require("../models/Bookings");

exports.addBooking = async (req, res) => {
  try {
    const bookingData = req.body;

    // Validate booking data if needed
    if (!bookingData.flightNumber || !bookingData.paymentDetails) {
      return res.status(400).json({ message: "Invalid booking data" });
    }

    // Create and save new booking
    const newBooking = new Booking(bookingData);
    await newBooking.save();

    res.status(201).json({ message: "Booking confirmed", booking: newBooking });
  } catch (error) {
    console.error("Booking error: ", error);
    res.status(500).json({ message: "Failed to confirm booking" });
  }
};

exports.getTest = async (req, res) => {
  res.send("Bookings route is working!");
};

exports.getBookingByID = async (req, res) => {
  console.log("Route hit");
  const { userId } = req.params; // Extract userId from request parameters

  try {
    // Query the database for bookings matching the userId
    const bookings = await Booking.find({ userId: userId });

    // Respond with the found bookings
    console.log(`Respond with the found bookings: ${JSON.stringify(bookings)}`);
    res.json(bookings);
  } catch (error) {
    // Handle errors (e.g., database issues)
    res.status(500).json({
      message: "An error occurred while retrieving bookings.",
      error: error.message,
    });
  }
};
