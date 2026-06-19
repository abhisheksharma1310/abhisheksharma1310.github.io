#!/bin/bash

# Exit immediately if any command fails
set -e

echo "Cleaning up old deployment cache and local branches..."
rm -rf node_modules/.cache/gh-pages
git branch -D gh-pages 2>/dev/null || true

echo "Activating SSH Agent..."
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

echo "Launching deploy pipeline..."
pnpm run deploy

echo "Portfolio deployment complete!"
