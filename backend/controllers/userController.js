const User = require("../models/User");

exports.getAllUsers = async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.find({}, "-password"); // Exclude password from response
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

exports.getUserById = async (req, res) => {
  try {
    // Fetch the user by ID from the authenticated user
    const userId = req.user._id;
    const user = await User.findById(userId, "-password"); // Exclude password from response

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
