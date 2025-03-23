#!/bin/bash

# Check if Git repository exists
if [ ! -d .git ]; then
  echo "Initializing Git repository..."
  git init
fi

# Add all files to Git
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Initial commit with Netlify configuration"

# Instructions for GitHub setup
echo ""
echo "===================================================="
echo "To push to GitHub and deploy to Netlify:"
echo "===================================================="
echo ""
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo ""
echo "2. Connect your local repository to GitHub:"
echo "   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "3. Go to Netlify (https://app.netlify.com/)"
echo "   - Sign in or create an account"
echo "   - Click 'Add new site' > 'Import an existing project'"
echo "   - Connect to GitHub and select your repository"
echo "   - Deploy settings will be automatically detected from netlify.toml"
echo "   - Click 'Deploy site'"
echo ""
echo "====================================================" 