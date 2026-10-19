const express = require("express");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");
const db = require("./db/connection");

const router = express.Router();

const COOKIE = "sid";
const SESSION_MS = 30 * 24 * 60 * 60 * 1000;   // stay logged in for 30 days
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Used so a wrong email takes as long to reject as a wrong password
const DUMMY_HASH = bcrypt.hashSync("not-a-real-password", 10);

const sha = text => crypto.createHash("sha256").update(text).digest("hex");

// Remove expired sessions when the server starts
db.prepare("DELETE FROM sessions WHERE expires_at < ?").run(Date.now());

// Only send the browser what it needs to show
function publicUser(row) {
    return {
        name: row.name,
        email: row.email,
        joined: new Date(row.created_at.replace(" ", "T") + "Z").toISOString()
    };
}

function startSession(res, userId) {
    const token = crypto.randomBytes(32).toString("hex");

    // Only a hash of the token is stored, so a leaked database can't be used to log in
    db.prepare("INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)")
      .run(sha(token), userId, Date.now() + SESSION_MS);

    res.cookie(COOKIE, token, {
        httpOnly: true,                                   // JavaScript can't read it
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",    // HTTPS only when live
        maxAge: SESSION_MS
    });
}

// Runs on every /api request: works out who is logged in
function loadUser(req, res, next) {
    const token = req.cookies && req.cookies[COOKIE];

    if (token) {
        const row = db.prepare(`
            SELECT u.id, u.name, u.email, u.created_at, s.expires_at
            FROM sessions s JOIN users u ON u.id = s.user_id
            WHERE s.token_hash = ?
        `).get(sha(token));

        if (row && row.expires_at > Date.now()) {
            req.user = row;
        } else if (row) {
            db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(sha(token));
        }
    }
    next();
}

// Use on any route that needs a logged-in user (saved recipes will use it)
function requireLogin(req, res, next) {
    if (!req.user) return res.status(401).json({ error: "Please log in." });
    next();
}

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 30,
    message: { error: "Too many attempts. Please try again in a few minutes." }
});

// POST /api/auth/signup   { name, email, password }
router.post("/signup", limiter, (req, res) => {
    const name = String(req.body.name || "").trim();
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    if (name.length < 2 || name.length > 60) {
        return res.status(400).json({ error: "Please enter your name." });
    }
    if (!EMAIL_RE.test(email) || email.length > 254) {
        return res.status(400).json({ error: "Please enter a valid email address." });
    }
    if (password.length < 8 || Buffer.byteLength(password) > 72) {
        return res.status(400).json({ error: "Your password must be 8 to 72 characters." });
    }
    if (db.prepare("SELECT 1 FROM users WHERE email = ?").get(email)) {
        return res.status(409).json({ error: "An account with this email already exists." });
    }

    const info = db.prepare("INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)")
        .run(name, email, bcrypt.hashSync(password, 10));

    startSession(res, info.lastInsertRowid);

    const row = db.prepare("SELECT * FROM users WHERE id = ?").get(info.lastInsertRowid);
    res.status(201).json(publicUser(row));
});

// POST /api/auth/login   { email, password }
router.post("/login", limiter, (req, res) => {
    const email = String(req.body.email || "").trim().toLowerCase();
    const password = String(req.body.password || "");

    const row = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
    const ok = bcrypt.compareSync(password, row ? row.password_hash : DUMMY_HASH);

    // One message for both cases, so nobody can learn which emails have accounts
    if (!row || !ok) {
        return res.status(401).json({ error: "Email or password is incorrect." });
    }

    startSession(res, row.id);
    res.json(publicUser(row));
});

// POST /api/auth/logout
router.post("/logout", (req, res) => {
    const token = req.cookies && req.cookies[COOKIE];
    if (token) db.prepare("DELETE FROM sessions WHERE token_hash = ?").run(sha(token));
    res.clearCookie(COOKIE);
    res.json({ ok: true });
});

// GET /api/auth/me   who is logged in right now
router.get("/me", (req, res) => {
    if (!req.user) return res.status(401).json({ error: "Not logged in." });
    res.json(publicUser(req.user));
});

// PATCH /api/auth/me   { name }
router.patch("/me", requireLogin, (req, res) => {
    const name = String(req.body.name || "").trim();
    if (name.length < 2 || name.length > 60) {
        return res.status(400).json({ error: "Please enter your name." });
    }

    db.prepare("UPDATE users SET name = ? WHERE id = ?").run(name, req.user.id);
    const row = db.prepare("SELECT * FROM users WHERE id = ?").get(req.user.id);
    res.json(publicUser(row));
});

module.exports = { router, loadUser, requireLogin };