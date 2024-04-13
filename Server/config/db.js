const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kumarvivek7282827749:vivekkumar@cluster0.qjxcqgc.mongodb.net/PieceTracker?retryWrites=true&w=majority"
    );
    console.log(`Mongodb connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`);
  }
};
module.exports = connectDB;
