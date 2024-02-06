const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  message: { type: String, require: true, maxLength: 250 },
  author: { type: String, required: true, maxLength: 50 },
  date_posted: { type: Date, default: new Date() },
});

// TODO: add pre to add avatar on save

module.exports = mongoose.model("Message", MessageSchema);
