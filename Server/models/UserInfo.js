const mongoose = require("mongoose");

// Define the schema for the userinfo
const userinfoSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  operation: {
    type: String,
    required: true,
  },
  checker: {
    type: String,
    required: true,
  },
  passInfo: {
    type: String,
    enum: ["Pass", "Rework", "Reject"],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Create a model from the schema
const UserInfo = mongoose.model("UserInfo", userinfoSchema);

module.exports = UserInfo;
