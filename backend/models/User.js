// const mongoose = require("mongoose");

// // Define the User Schema
// const userSchema = new mongoose.Schema({
//   id: { type: Number, required: true, unique: true },
//   firstName: { type: String, required: true },
//   lastName: { type: String, required: true },
//   dateOfBirth: { type: Date, required: true },
//   email: { type: String, required: true, unique: true },
// });

// // Create a Model from the Schema
// const UserModel = mongoose.model("users", userSchema);

// module.exports = UserModel;
//==========================================
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

// Encrypt password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Method to compare password
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", UserSchema);
