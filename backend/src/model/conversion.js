const mongoose = require("mongoose");
const conversation = mongoose.Schema({
  sender: {
    name: String,
    required: true,
  },
  receiver: {
    name: String,
    required: true,
  },
  lastmessage: {
    name: String,
  },
});

const model = mongoose.model("conversation", conversation);
module.exports = model;
