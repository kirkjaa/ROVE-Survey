#!/bin/bash

# ═══════════════════════════════════════════════════════════════════════════════
# ROVE Survey System - Deployment Script
# ═══════════════════════════════════════════════════════════════════════════════
# 
# This script deploys the ROVE Survey System on a VPS with Docker
# 
# Prerequisites:
#   - Docker installed on VPS
#   - Docker Compose installed on VPS
#   - Git installed on VPS (optional, for cloning)
#
# Usage:
#   chmod +x deploy.sh
#   ./deploy.sh
#
# ═══════════════════════════════════════════════════════════════════════════════

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="rove-survey"
APP_DIR="/opt/rove-survey"
BACKUP_DIR="/opt/rove-backups"

echo -e "${PURPLE}"
echo "╔═══════════════════════════════════════════════════════════╗"
echo "║           ROVE Survey System - Deployment Script          ║"
echo "╚═══════════════════════════════════════════════════════════╝"
echo -e "${NC}"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${YELLOW}⚠️  Please run as root or with sudo${NC}"
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}❌ Docker is not installed. Installing...${NC}"
    curl -fsSL https://get.docker.com | sh
    systemctl enable docker
    systemctl start docker
    echo -e "${GREEN}✅ Docker installed successfully${NC}"
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null && ! docker compose version &> /dev/null; then
    echo -e "${RED}❌ Docker Compose is not installed. Installing...${NC}"
    apt-get update && apt-get install -y docker-compose-plugin
    echo -e "${GREEN}✅ Docker Compose installed successfully${NC}"
fi

echo -e "${BLUE}📁 Setting up application directory...${NC}"
mkdir -p "$APP_DIR"
mkdir -p "$BACKUP_DIR"

# Copy files to app directory (if running from source)
if [ -f "./docker-compose.yml" ]; then
    echo -e "${BLUE}📋 Copying application files...${NC}"
    cp -r ./* "$APP_DIR/"
fi

cd "$APP_DIR"

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}📝 Creating .env file from template...${NC}"
    if [ -f ".env.example" ]; then
        cp .env.example .env
        
        # Generate random session secret
        SESSION_SECRET=$(openssl rand -hex 32)
        sed -i "s/SESSION_SECRET=.*/SESSION_SECRET=$SESSION_SECRET/" .env
        
        echo -e "${GREEN}✅ .env file created${NC}"
        echo -e "${YELLOW}⚠️  Please update ADMIN_USERNAME and ADMIN_PASSWORD in .env file!${NC}"
    else
        echo -e "${RED}❌ .env.example not found. Creating default .env...${NC}"
        cat > .env << EOF
NODE_ENV=production
PORT=5001
ADMIN_USERNAME=roveadmin
ADMIN_PASSWORD=RoveSecure2026!
SESSION_SECRET=$(openssl rand -hex 32)
EOF
    fi
fi

# Backup existing data if container exists
if docker ps -a --format '{{.Names}}' | grep -q "^${APP_NAME}$"; then
    echo -e "${BLUE}💾 Backing up existing data...${NC}"
    BACKUP_FILE="$BACKUP_DIR/rove-backup-$(date +%Y%m%d-%H%M%S).tar.gz"
    docker run --rm -v rove-survey_rove_data:/data -v "$BACKUP_DIR":/backup alpine tar czf "/backup/$(basename $BACKUP_FILE)" -C /data .
    echo -e "${GREEN}✅ Backup saved to: $BACKUP_FILE${NC}"
fi

# Stop and remove existing container
echo -e "${BLUE}🛑 Stopping existing container (if any)...${NC}"
docker-compose down 2>/dev/null || docker compose down 2>/dev/null || true

# Build and start the container
echo -e "${BLUE}🔨 Building Docker image...${NC}"
docker-compose build --no-cache 2>/dev/null || docker compose build --no-cache

echo -e "${BLUE}🚀 Starting container...${NC}"
docker-compose up -d 2>/dev/null || docker compose up -d

# Wait for container to be healthy
echo -e "${BLUE}⏳ Waiting for container to be ready...${NC}"
sleep 5

# Check if container is running
if docker ps --format '{{.Names}}' | grep -q "^${APP_NAME}$"; then
    echo -e "${GREEN}"
    echo "╔═══════════════════════════════════════════════════════════╗"
    echo "║          ✅ Deployment Successful!                        ║"
    echo "╠═══════════════════════════════════════════════════════════╣"
    echo "║                                                           ║"
    echo "║  The ROVE Survey System is now running on port 5001      ║"
    echo "║                                                           ║"
    echo "║  Survey URL:  http://YOUR_SERVER_IP:5001                 ║"
    echo "║  Admin URL:   http://YOUR_SERVER_IP:5001/admin           ║"
    echo "║                                                           ║"
    echo "║  Default Credentials:                                     ║"
    echo "║  Username: roveadmin                                      ║"
    echo "║  Password: RoveSecure2026!                                ║"
    echo "║                                                           ║"
    echo "║  ⚠️  IMPORTANT: Change the default password!              ║"
    echo "║     Edit $APP_DIR/.env and restart            ║"
    echo "║                                                           ║"
    echo "╚═══════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
    
    echo -e "${BLUE}📊 Container Status:${NC}"
    docker ps --filter name=${APP_NAME}
    
    echo ""
    echo -e "${YELLOW}Nginx Proxy Manager Configuration:${NC}"
    echo "  1. Go to your Nginx Proxy Manager dashboard"
    echo "  2. Add a new Proxy Host:"
    echo "     - Domain: your-domain.com"
    echo "     - Forward Hostname: localhost (or server IP)"
    echo "     - Forward Port: 5001"
    echo "     - Enable 'Block Common Exploits'"
    echo "     - Enable SSL with Let's Encrypt"
    echo ""
else
    echo -e "${RED}❌ Deployment failed. Container is not running.${NC}"
    echo -e "${YELLOW}Check logs with: docker logs ${APP_NAME}${NC}"
    exit 1
fi
