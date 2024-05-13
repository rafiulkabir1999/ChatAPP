const mongoose = require("mongoose");

const UserScheme = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const userModel = mongoose.model("user", UserScheme);
module.exports = userModel;
