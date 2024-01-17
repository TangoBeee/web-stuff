const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide an Username."],
    unique: [true, "Username already exist!"],
  },
  password: {
    type: String,
    required: [true, "Please provide a Password."],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email."],
    unique: [true, "Email already exist!"],
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  address: {
    type: String,
  },
  profile: {
    type: String,
  },
});

module.exports = (mongoose.model.Users || mongoose.model("User", UserSchema));
