const { ObjectId } = require('mongoose');
const mongoose = require("mongoose");

const computerSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: {
    type: String,
    required: [true, "Please provide a name to the computer"],
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
