const express = require("express");
const router = express.Router();
const { getUserById } = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

// Route to get a user by their own ID
router.get("/user", authMiddleware, getUserById);

module.exports = router;
