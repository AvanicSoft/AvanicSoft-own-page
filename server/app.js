const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmpRoutes = require('./routes/Emp');
const contact = require('./routes/contact')
const workRoutes = require('./routes/works');
require("dotenv").config();

const path = require('path');
const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "public/uploads")));


mongoose.connect('mongodb://localhost:27017/AvanicSoft')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));


app.use('/api/records', EmpRoutes);
app.use('/api/contact',contact )
app.use('/api/works', workRoutes);
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
