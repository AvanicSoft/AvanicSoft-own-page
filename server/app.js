const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmpRoutes = require('./routes/Emp');
const contact = require('./routes/contact')
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/Emp')
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Connection error:", err));


app.use('/api/records', EmpRoutes);
app.use('/api/contact',contact )


const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
