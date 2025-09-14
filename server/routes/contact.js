  const express = require("express");
  const { sendEmail } = require("../utils/email");
  const e = require("express");
  const Contact = require("../models/contact");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const router = express.Router();

// POST /api/contact (open to public)
router.post("/whatsapp", async (req, res) => {
    const {whatsapp} = req.body;
    if (!whatsapp)
      return res.status(400).json({ ok: false, error: "whatsapp is required" });
    const toEmail = process.env.GMAIL_USER;
    const subject = "from footer";
    const text = `whatsapp Number is ${whatsapp}`;
    const html = `
      <div>
          <p>Whatsapp Number is</p>
          <p class="strong">${whatsapp}</p>
      </div>`;

    const mailinfo = await sendEmail({subject, to:toEmail, html, text});
    console.log(mailinfo);
    return res.status(200).json({ok : true ,message : 'Email send'})
  });


router.post("/send-email", async (req, res) => {
  console.log("Received request to /send-email");
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({ ok: false, error: "Email is required" });

    const token = crypto.randomBytes(32).toString('hex');
    const expires = Date.now() + 24 * 60 * 60 * 1000;

    await Contact.findOneAndUpdate(
      { email },
      {
        $set: {
          verificationToken: token,
          verificationTokenExpires: expires,
          verified: false
        }
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    const url = `${process.env.SERVER_URL}/api/contact/verify-email/${token}`;
    const subject = "Verify your email - AvionicSoft";
    const text = `Click this link to verify your email: ${url}`;
    const html = `<p>Click <a href="${url}">here</a>  to verify your email</p>`;

    await sendEmail({ subject, to: email, text, html });

    res.status(200).json({ ok: true, message: "Verification email sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});



router.get("/verify-email/:token", async (req, res) => {
  try {
    const { token } = req.params;
    if (!token) {
      return res.status(400).send("Missing token");
    }

    const contact = await Contact.findOne({ verificationToken: token });
    if (!contact) {
      return res.status(400).send("Invalid or expired token");
    }

    if (contact.verificationTokenExpires < Date.now()) {
      return res.status(400).send("Token expired, please request again");
    }

  
    contact.verified = true;
    contact.verificationToken = undefined;
    contact.verificationTokenExpires = undefined;
    await contact.save();

  
    const authToken = jwt.sign(
      { _id: contact._id, email: contact.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

  
    res.cookie("auth", authToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

  
    const redirectUrl = `${process.env.CLIENT_URL}/contact`;
    return res.redirect(302, redirectUrl);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Server error");
  }
})

router.get("/me", async (req, res) => {
  
  console.log("Received request to /me");
  try {
    const token = req.cookies.auth;
    if (!token) {
      return res.status(401).json({ ok: false, message: "Not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const contact = await Contact.findById(decoded._id);
    if (!contact || !contact.verified) {
      console.log("User not verified:", contact ? contact.email : "Unknown");
      return res.status(401).json({ ok: false, message: "Email not verified" });
    }
    console.log("User verified:", contact.email);

    res.status(200).json({ ok: true, user: { _id: contact._id, email: contact.email } }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "Server error" });
  }
});

router.post("/save", async (req, res) => {
  console.log("Received request to /save");
  try {
    const token = req.cookies.auth;
    if (!token) {
      return res.status(401).json({ ok: false, message: "Not logged in" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const { name, phone, message } = req.body;
    if (!name || !phone || !message) {
      return res.status(400).json({ ok: false, error: "All fields are required" });
    }

    const contact = await Contact.findById(decoded._id);
    if (!contact || !contact.verified) {
      return res.status(400).json({ ok: false, message: "Email not verified" });
    }

    const subject = "New Contact Message";
    const text = `Name: ${name}, Email: ${contact.email}, Phone: ${phone}, Message: ${message}`;
    const html = `
      <div>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `;

    await sendEmail({ subject, to: process.env.GMAIL_USER, text, html });

    res.status(200).json({ ok: true, message: "Message sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "Server error" });
  }
});


  module.exports = router;