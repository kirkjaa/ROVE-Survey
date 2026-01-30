# ROVE Survey System

A beautiful, modern survey system for ROVE with admin authentication and Docker deployment support.

![ROVE Survey](https://img.shields.io/badge/ROVE-Survey%20System-ff6b6b?style=for-the-badge)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)
![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js)

---

## 🎨 Features

### Survey Types
- **💭 Empathy Questionnaire** (6 parts, ~8 minutes)
  - Discovery & The Inspiration Gap
  - Social Connection & "Tribe" Dynamics
  - "Life Swap" & Motivation
  - Aesthetics & UX (The ROVE "Vibe")
  - Logistics, Safety, & Risk Tolerance
  - Feature Ranking

- **📊 Quantitative Survey** (8 parts, ~6 minutes)
  - Personal & Professional Profile
  - "Vibe Profile" & Social Analytics
  - Discovery & Aesthetic Feedback
  - Primary Travel Objective
  - Host Transparency & Kindred Hosting
  - Local Integration & Language
  - Risk Tolerance & Commitment
  - Feature Prioritization

### Admin Panel
- 🔐 Secure login authentication
- 📈 Response statistics dashboard
- 👁️ View individual responses in detail
- 📥 Export responses to CSV
- 🗑️ Delete individual or all responses
- 🔄 Real-time data updates

### Design
- Sunset gradient aesthetic (Coral → Magenta → Purple)
- Glassmorphism UI effects
- Fully responsive design
- Drag-and-drop feature ranking
- TikTok-style modern interface

---

## 🔐 Admin Login Credentials

| Setting | Value |
|---------|-------|
| **Username** | `roveadmin` |
| **Password** | `RoveSecure2026!` |

> ⚠️ **IMPORTANT:** Change these credentials in production by editing the `.env` file!

---

## 📊 How Survey Responses Work

### Data Storage Architecture

Survey responses are stored as **JSON files** on the server:

```
rove-survey/
└── data/
    ├── empathy_responses.json      # Empathy questionnaire responses
    └── quantitative_responses.json  # Quantitative survey responses
```

When deployed with Docker, data persists in a **Docker volume** (`rove_data`).

### Survey Submission Flow (Public)

```
User fills survey → Submit → POST /api/survey/:type → Server saves to JSON file
```

**No authentication required** for survey submission.

### Admin Access Flow (Protected)

```
Admin visits /admin → Login screen → Enter credentials → Session created → Dashboard access
```

### API Endpoints

| Endpoint | Method | Auth Required | Description |
|----------|--------|---------------|-------------|
| `/api/survey/:type` | POST | ❌ No | Submit survey response |
| `/api/survey/:type` | GET | ✅ Yes | Get all responses |
| `/api/survey/:type/:id` | GET | ✅ Yes | Get single response |
| `/api/survey/:type/:id` | DELETE | ✅ Yes | Delete single response |
| `/api/survey/:type` | DELETE | ✅ Yes | Delete all responses |
| `/api/stats` | GET | ✅ Yes | Get response statistics |
| `/api/auth/login` | POST | ❌ No | Admin login |
| `/api/auth/logout` | POST | ❌ No | Admin logout |
| `/api/auth/check` | GET | ❌ No | Check auth status |

### Data Structure Example

```json
{
    "id": "resp_1738259700123_abc123xyz",
    "timestamp": "2026-01-31T12:15:00.123Z",
    "type": "quantitative",
    "responses": {
        "q_q1": "user@email.com",
        "q_q2": "23_27",
        "q_q3": "professional_nomad",
        "q_q4": "sometimes",
        "q_q5": ["bad_company", "tourist_trap"],
        "q_q6": "mid_energy",
        "q_q17_ranking": [
            {"rank": 1, "value": "video_booking"},
            {"rank": 2, "value": "host_transparency"}
        ]
    }
}
```

### Security Features

| Feature | Description |
|---------|-------------|
| **Session-based auth** | Admin stays logged in for 24 hours |
| **Password hashing** | Passwords secured with bcrypt |
| **HTTP-only cookies** | Prevents XSS attacks on session |
| **Protected endpoints** | All admin APIs require authentication |
| **Docker volume** | Data persists independently of container |

---

## 🚀 Deployment Guide

### Prerequisites

- VPS with Docker installed
- Docker Compose installed
- Nginx Proxy Manager (optional, for SSL)

### Quick Deploy (VPS)

1. **Clone the repository:**
```bash
git clone https://github.com/kirkjaa/ROVE-Survey.git
cd ROVE-Survey
```

2. **Run the deployment script:**
```bash
chmod +x deploy.sh
sudo ./deploy.sh
```

3. **Access your survey:**
   - Survey: `http://YOUR_SERVER_IP:5001`
   - Admin: `http://YOUR_SERVER_IP:5001/admin`

### Manual Docker Deployment

```bash
# Build and start
docker-compose up -d --build

# View logs
docker logs rove-survey

# Stop
docker-compose down
```

### Environment Configuration

Create a `.env` file (copy from `.env.example`):

```env
NODE_ENV=production
PORT=5001

# Change these credentials!
ADMIN_USERNAME=roveadmin
ADMIN_PASSWORD=RoveSecure2026!

# Generate a random secret: openssl rand -hex 32
SESSION_SECRET=your-random-session-secret-key
```

---

## 🌐 Nginx Proxy Manager Setup

1. Add a new **Proxy Host** in NPM
2. Configure:
   - **Domain:** `your-domain.com`
   - **Forward Hostname:** `localhost` (or server IP)
   - **Forward Port:** `5001`
3. Enable **SSL** with Let's Encrypt
4. Enable **"Block Common Exploits"**

---

## 📁 Project Structure

```
rove-survey/
├── public/                 # Frontend static files
│   ├── index.html         # Survey page
│   ├── admin.html         # Admin panel with login
│   ├── styles.css         # ROVE sunset gradient styles
│   ├── survey.js          # Survey form logic
│   └── admin.js           # Admin panel logic
├── data/                   # Survey responses (JSON)
│   ├── empathy_responses.json
│   └── quantitative_responses.json
├── server.js              # Express server with auth
├── package.json           # Dependencies
├── Dockerfile             # Docker image config
├── docker-compose.yml     # Docker Compose config
├── deploy.sh              # VPS deployment script
├── .env.example           # Environment template
├── .dockerignore          # Docker ignore rules
└── .gitignore             # Git ignore rules
```

---

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start the server
npm start

# Server runs on http://localhost:5001
```

---

## 🐳 Docker Commands

```bash
# Start containers
docker-compose up -d

# View logs
docker logs rove-survey

# Follow logs in real-time
docker logs -f rove-survey

# Stop containers
docker-compose down

# Rebuild after changes
docker-compose up -d --build

# View running containers
docker ps

# Access container shell
docker exec -it rove-survey sh

# Backup data
docker run --rm -v rove-survey_rove_data:/data -v $(pwd):/backup alpine tar czf /backup/rove-backup.tar.gz -C /data .
```

---

## 🔄 System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    ROVE SURVEY SYSTEM                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PUBLIC (No Login)           ADMIN (Login Required)         │
│  ──────────────────          ─────────────────────          │
│                                                             │
│  📝 Fill Survey              🔐 Login with credentials      │
│       ↓                           ↓                         │
│  POST /api/survey/:type      GET /api/auth/check            │
│       ↓                           ↓                         │
│  ┌─────────────────┐         📊 View Stats                  │
│  │  data/          │         📋 View Responses              │
│  │  ├─ empathy.json│←────────📥 Export CSV                  │
│  │  └─ quant.json  │         🗑️ Delete Responses            │
│  └─────────────────┘                                        │
│     (Docker Volume)                                         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Troubleshooting

### Container not starting?
```bash
docker logs rove-survey
```

### Port already in use?
```bash
# Check what's using port 5001
sudo lsof -i :5001

# Or change port in docker-compose.yml
ports:
  - "5002:5001"  # Use port 5002 instead
```

### Reset admin password?
Edit `.env` file and restart:
```bash
docker-compose restart
```

### Data not persisting?
Check Docker volume:
```bash
docker volume ls
docker volume inspect rove-survey_rove_data
```

---

## 📝 Changing Admin Credentials

1. Edit the `.env` file on your server:
```bash
nano /opt/rove-survey/.env
```

2. Update the credentials:
```env
ADMIN_USERNAME=your_new_username
ADMIN_PASSWORD=your_secure_password
SESSION_SECRET=generate_new_secret_with_openssl_rand_hex_32
```

3. Restart the container:
```bash
docker-compose restart
```

---

## 📜 License

MIT License - Feel free to use and modify!

---

## 🙏 Credits

Built with ✨ for **ROVE** - The future of travel experiences

---

**Repository:** [https://github.com/kirkjaa/ROVE-Survey](https://github.com/kirkjaa/ROVE-Survey)
