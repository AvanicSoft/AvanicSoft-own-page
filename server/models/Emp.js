const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  contact: String,
  location: String
});

module.exports = mongoose.model('Record', empSchema);