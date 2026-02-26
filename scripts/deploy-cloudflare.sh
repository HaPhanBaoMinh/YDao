#!/bin/bash
# Deploy to Cloudflare Pages
# Usage: CLOUDFLARE_API_TOKEN="your_token" ./scripts/deploy-cloudflare.sh

set -e

if [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "Error: CLOUDFLARE_API_TOKEN is required"
  echo "Usage: CLOUDFLARE_API_TOKEN=\"your_token\" ./scripts/deploy-cloudflare.sh"
  exit 1
fi

CLOUDFLARE_ACCOUNT_ID="${CLOUDFLARE_ACCOUNT_ID:-ee2f03ef1c899540aa995dd5150e5ef2}"

echo "Building..."
npm run build

echo "Deploying to Cloudflare Pages..."
npx wrangler pages deploy out --project-name=ydao

echo "Done!"
