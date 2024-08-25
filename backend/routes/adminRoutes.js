const express = require("express");
const router = express.Router();
const { getAllUsers } = require("../controllers/userController");
const {
  authMiddleware,
  adminMiddleware,
} = require("../middleware/authMiddleware");

// Route to get all users (admin only)
router.get("/users", authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;
