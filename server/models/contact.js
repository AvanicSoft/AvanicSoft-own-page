const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, default: '' },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    verified: { type: Boolean, default: false },
    verificationToken: { type: String, index: true },
    verificationTokenExpires: { type: Date },

  },
  { timestamps: true }
);

const contact = mongoose.model('contact', ContactSchema);
module.exports = contact;