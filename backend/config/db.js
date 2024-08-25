const mongoose = require("mongoose");
require("dotenv").config();

const API_KEY = process.env.API_KEY;
const JWT_SECRET = process.env.JWT_SECRET;
// console.log(API_KEY);
// console.log(JWT_SECRET);
// console.log("JWT_SECRET:", process.env.JWT_SECRET);

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://owner:${API_KEY}@cluster0.rqktl.mongodb.net/skyroutes?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
