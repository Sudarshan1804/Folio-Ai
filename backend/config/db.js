const mongoose = require("mongoose");

let isConnected = false;

const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in the environment variables.");
  }

  if (isConnected) {
    console.log("=> using existing database connection");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("=> new database connection established");
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
};

module.exports = connectToDatabase;
