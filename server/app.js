const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmpRoutes = require('./routes/Emp');
const contact = require('./routes/contact')
const workRoutes = require('./routes/works');
const cookieParser = require("cookie-parser");
const { connectToMongo } = require('./utils/mongo');

require("dotenv").config();

const path = require('path');
const app = express();
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,             
}));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));
app.use(cookieParser());

app.use('/api/records', EmpRoutes);
app.use('/api/contact',contact )
app.use('/api/works', workRoutes);

const PORT = 5000;  
async function startServer() {
  try {
    await connectToMongo();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();