const express = require("express");
const { sendEmail } = require("../utils/email");

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

module.exports = router;