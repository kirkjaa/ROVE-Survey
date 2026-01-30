const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5001;

// ===== Configuration =====
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'roveadmin';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'RoveSecure2026!', 10);
const SESSION_SECRET = process.env.SESSION_SECRET || 'rove-survey-secret-key-change-in-production';

// Data storage path
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const EMPATHY_FILE = path.join(DATA_DIR, 'empathy_responses.json');
const QUANT_FILE = path.join(DATA_DIR, 'quantitative_responses.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize data files
if (!fs.existsSync(EMPATHY_FILE)) {
    fs.writeFileSync(EMPATHY_FILE, '[]');
}
if (!fs.existsSync(QUANT_FILE)) {
    fs.writeFileSync(QUANT_FILE, '[]');
}

// ===== Middleware =====
// Trust proxy for reverse proxy setups (nginx, cloud providers)
app.set('trust proxy', 1);

app.use(cors({
    origin: true,
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// ===== Helper Functions =====
function readResponses(type) {
    const file = type === 'empathy' ? EMPATHY_FILE : QUANT_FILE;
    try {
        const data = fs.readFileSync(file, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

function writeResponses(type, data) {
    const file = type === 'empathy' ? EMPATHY_FILE : QUANT_FILE;
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ===== Auth Middleware =====
function requireAuth(req, res, next) {
    if (req.session && req.session.isAuthenticated) {
        next();
    } else {
        res.status(401).json({ error: 'Unauthorized' });
    }
}

// ===== Auth Routes =====
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN_USERNAME && bcrypt.compareSync(password, ADMIN_PASSWORD_HASH)) {
        req.session.isAuthenticated = true;
        req.session.username = username;
        res.json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, error: 'Invalid credentials' });
    }
});

app.post('/api/auth/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.status(500).json({ error: 'Logout failed' });
        } else {
            res.json({ success: true, message: 'Logged out' });
        }
    });
});

app.get('/api/auth/check', (req, res) => {
    if (req.session && req.session.isAuthenticated) {
        res.json({ authenticated: true, username: req.session.username });
    } else {
        res.json({ authenticated: false });
    }
});

// ===== Survey API Routes =====
// Submit survey response (public)
app.post('/api/survey/:type', (req, res) => {
    const { type } = req.params;
    
    if (type !== 'empathy' && type !== 'quantitative') {
        return res.status(400).json({ error: 'Invalid survey type' });
    }
    
    const response = {
        id: `resp_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date().toISOString(),
        type: type,
        responses: req.body.responses
    };
    
    const responses = readResponses(type);
    responses.push(response);
    writeResponses(type, responses);
    
    res.json({ success: true, id: response.id });
});

// Get all responses (protected)
app.get('/api/survey/:type', requireAuth, (req, res) => {
    const { type } = req.params;
    
    if (type !== 'empathy' && type !== 'quantitative') {
        return res.status(400).json({ error: 'Invalid survey type' });
    }
    
    const responses = readResponses(type);
    res.json(responses);
});

// Get single response (protected)
app.get('/api/survey/:type/:id', requireAuth, (req, res) => {
    const { type, id } = req.params;
    
    if (type !== 'empathy' && type !== 'quantitative') {
        return res.status(400).json({ error: 'Invalid survey type' });
    }
    
    const responses = readResponses(type);
    const response = responses.find(r => r.id === id);
    
    if (!response) {
        return res.status(404).json({ error: 'Response not found' });
    }
    
    res.json(response);
});

// Delete single response (protected)
app.delete('/api/survey/:type/:id', requireAuth, (req, res) => {
    const { type, id } = req.params;
    
    if (type !== 'empathy' && type !== 'quantitative') {
        return res.status(400).json({ error: 'Invalid survey type' });
    }
    
    let responses = readResponses(type);
    const initialLength = responses.length;
    responses = responses.filter(r => r.id !== id);
    
    if (responses.length === initialLength) {
        return res.status(404).json({ error: 'Response not found' });
    }
    
    writeResponses(type, responses);
    res.json({ success: true });
});

// Delete all responses (protected)
app.delete('/api/survey/:type', requireAuth, (req, res) => {
    const { type } = req.params;
    
    if (type !== 'empathy' && type !== 'quantitative') {
        return res.status(400).json({ error: 'Invalid survey type' });
    }
    
    writeResponses(type, []);
    res.json({ success: true });
});

// Get stats (protected)
app.get('/api/stats', requireAuth, (req, res) => {
    const empathyResponses = readResponses('empathy');
    const quantResponses = readResponses('quantitative');
    
    res.json({
        empathy: empathyResponses.length,
        quantitative: quantResponses.length,
        total: empathyResponses.length + quantResponses.length
    });
});

// ===== Page Routes =====
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Catch-all route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ===== Start Server =====
app.listen(PORT, '0.0.0.0', () => {
    console.log(`
╔═══════════════════════════════════════════════════════════╗
║                    ROVE Survey System                      ║
╠═══════════════════════════════════════════════════════════╣
║  Server running on port ${PORT}                              ║
║                                                           ║
║  Survey:  http://localhost:${PORT}                           ║
║  Admin:   http://localhost:${PORT}/admin                     ║
║                                                           ║
║  Admin Credentials:                                       ║
║  Username: ${ADMIN_USERNAME.padEnd(20)}                    ║
║  Password: (set via ADMIN_PASSWORD env var)               ║
╚═══════════════════════════════════════════════════════════╝
    `);
});
