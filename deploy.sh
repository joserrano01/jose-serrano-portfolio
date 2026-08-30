#!/bin/bash
set -euo pipefail

DOCKER="/home/soporte/bin/docker"
APP_DIR="/aplic/projects/portafolioJoseSerrano"

echo "[deploy] $(date '+%Y-%m-%d %H:%M:%S') — Iniciando deploy portfolio..."

cd "$APP_DIR"

echo "[deploy] Pull latest code..."
git fetch origin main
git reset --hard origin/main

echo "[deploy] Build image..."
$DOCKER compose build --no-cache

echo "[deploy] Restart container (zero-downtime swap)..."
$DOCKER compose up -d --remove-orphans

echo "[deploy] Status:"
$DOCKER compose ps

echo "[deploy] ✅ Portfolio live en https://jserrano.diasofonline.com"
