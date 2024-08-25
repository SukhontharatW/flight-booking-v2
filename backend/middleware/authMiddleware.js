const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to verify JWT and add user to request
exports.authMiddleware = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  console.log(`hello from server`);

  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    // console.log("Received token:", token); // Debugging line
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded token:", decoded); // Debugging line
    req.user = await User.findById(decoded.id);
    if (!req.user) {
      return res.status(401).json({ msg: "User not found" });
    }
    next();
  } catch (err) {
    console.error("Token verification error:", err); // Debugging line
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// Middleware to check if user is admin
exports.adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ msg: "Access denied" });
  }
  next();
};
