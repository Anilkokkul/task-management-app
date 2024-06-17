const mongoose = require("mongoose");

exports.db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("error while connecting database", error);
  }
};
