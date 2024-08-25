// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const FlightModel = require("./models/Flights");
// const UserModel = require("./models/Users");
// const BookingModel = require("./models/Bookings");
// require("dotenv").config();

// const API_KEY = process.env.API_KEY;
// mongoose.connect(
//   `mongodb+srv://owner:${API_KEY}@cluster0.rqktl.mongodb.net/skyroutes?retryWrites=true&w=majority&appName=Cluster0`
// );

// app.get("/getFlights", async (req, res) => {
//   try {
//     let result = await FlightModel.find();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.get("/getUsers", async (req, res) => {
//   try {
//     let result = await UserModel.find();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.get("/getBookings", async (req, res) => {
//   try {
//     let result = await BookingModel.find();
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// app.listen(4000, () => {
//   console.log("Server is running...");
// });

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const adminRoutes = require("./routes/adminRoutes");
const flightRoutes = require("./routes/flightRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const corsOptions = {
  origin: "*", // Allows all origins
  methods: "GET,POST,PUT,DELETE,OPTIONS", // Allowed HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Allowed headers
};

app.use(cors(corsOptions));
// Connect to database
connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); // Authentication routes
app.use("/api", userRoutes); //  User routes
app.use("/api/admin", adminRoutes); // Admin-specific routes
app.use("/api", flightRoutes); // Flight routes
app.use("/api", bookingRoutes); // Booking routes

const PORT = process.env.PORT || 4000;
console.log(PORT);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
