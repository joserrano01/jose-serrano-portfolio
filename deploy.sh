#!/bin/bash
set -e

APP_DIR="/aplic/projects/portafolioJoseSerrano"

echo "==> Pulling latest code..."
cd "$APP_DIR"
git pull origin main

echo "==> Building Docker image..."
docker compose build --no-cache

echo "==> Restarting container..."
docker compose up -d

echo "==> Status:"
docker compose ps

echo ""
echo "✅ Portfolio desplegado en https://jserrano.diasofonline.com"
