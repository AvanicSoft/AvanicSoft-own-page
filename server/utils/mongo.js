// utils/mongo.js
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connectToMongo() {
  if (!db) {
    try {
      await client.connect();
      db = client.db(); // default DB from URI
      console.log("Connected to MongoDB");
    } catch (err) {
      console.error("Failed to connect to MongoDB:", err);
      throw err;
    }
  }
  return db;
}

module.exports = { connectToMongo };
