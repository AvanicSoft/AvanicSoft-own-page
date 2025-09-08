// utils/jwt.js
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Existing auth functions
function signToken(user) { /* ... */ }
function verifyToken(token) { /* ... */ }
function setAuthCookie(res, token) { /* ... */ }
function clearAuthCookie(res) { /* ... */ }

// ----- New email verification functions -----
function verificationToken() {
  return jwt.sign(
    { type: "email-verification" },
    JWT_SECRET,
    { expiresIn: '1h' } // token valid for 1 hour
  );
}

function verificationTokenExpires() {
  return Date.now() + 60 * 60 * 1000; // 1 hour from now
}

module.exports = {
  signToken,
  verifyToken,
  setAuthCookie,
  clearAuthCookie,
  verificationToken,
  verificationTokenExpires
};
