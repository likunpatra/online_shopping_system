const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB connected");
  });

  if (!process.env.MONGODB_URL) {
    throw new Error("MONGODB_URL is not defined in environment variables");
  }

  await mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connectDB;
