// utils/mongo.js
const mongoose = require('mongoose');
require('dotenv').config();

async function connectToMongo() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB via Mongoose");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    throw err;
  }
}

module.exports = { connectToMongo };
