const mongoose = require("mongoose");

const computerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to the computer"],
    unique: true,
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for a computer"],
  },
  description: {
    type: String,
    required: [true, "Please provide computer with description"],
  },
  price: {
    type: Number,
    required: [true, "Please provide computer with price"],
  },
});

module.exports = mongoose.model("computer", computerSchema);
