const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { validationResult } = require("express-validator");

// Sign up
exports.signup = async (req, res) => {
  const { email, password, role, firstName, lastName } = req.body; // Include firstName and lastName
  const errors = validationResult(req);
  // Check if all required fields are provided
  if (!email || !password || !firstName || !lastName) {
    return res
      .status(400)
      .json({ msg: "Please enter all required information" });
  }

  try {
    let user = await User.findOne({ email });

    // if (user) return res.status(400).json({ msg: "User already exists" });
    if (user)
      return res.status(400).json({ msg: "The given email already exists " });

    // If role is not provided, default to 'user'
    const userRole = role && ["admin", "user"].includes(role) ? role : "user";

    user = new User({ email, password, role: userRole, firstName, lastName });
    await user.save();

    res.status(201).json({ msg: "User created" });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};

// Sign in
exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    const isMatch = await user.comparePassword(password);

    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Create and sign JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // console.log("Generated Token:", token);
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
};
