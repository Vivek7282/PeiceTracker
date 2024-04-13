const mongoose = require("mongoose");

// Define the schema for the data
const sizeDataSchema = new mongoose.Schema({
  size: {
    type: String,
    required: true,
  },
  measurements: [
    {
      Check: {
        type: Number,
        default: 0,
      },
      P: {
        type: Number,
        default: 0,
      },
      RW: {
        type: Number,
        default: 0,
      },
      RJ: {
        type: Number,
        default: 0,
      },
    },
  ],
});

// Create a model from the schema
const SizeData = mongoose.model("SizeData", sizeDataSchema);

module.exports = SizeData;
