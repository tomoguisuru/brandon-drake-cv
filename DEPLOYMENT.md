# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Create GitHub Repository
```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Brandon Drake Digital CV"

# Create GitHub repository and add remote
# Replace 'your-username' with your actual GitHub username
git remote add origin https://github.com/your-username/brandon-drake-cv.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy on the next push to main branch

### 3. Update Homepage URL
Update the `homepage` field in `package.json` to match your GitHub username:
```json
"homepage": "https://YOUR-USERNAME.github.io/brandon-drake-cv"
```

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)
- Push any changes to the `main` branch
- GitHub Actions will automatically build and deploy
- Site will be available at: `https://YOUR-USERNAME.github.io/brandon-drake-cv`

### Method 2: Manual Deployment
```bash
# Build and deploy manually
yarn deploy
```

## Local Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Project Structure
```
brandon-drake-cv/
├── .github/workflows/
│   └── deploy.yml          # GitHub Actions workflow
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Contact.js
│   │   ├── Skills.js
│   │   ├── Experience.js
│   │   └── Education.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json            # Contains homepage and deploy scripts
└── DEPLOYMENT.md          # This file
```

## Troubleshooting

### Common Issues:
1. **404 Error**: Make sure the homepage URL in package.json matches your GitHub username
2. **Build Fails**: Check that all dependencies are properly installed
3. **Permissions Error**: Ensure GitHub Actions has proper permissions (should be automatic with the workflow)

### Checking Deployment Status:
1. Go to **Actions** tab in your GitHub repository
2. Check the latest workflow run
3. If green ✅ - deployment successful
4. If red ❌ - click to see error details

## Updating the CV

To update Brandon's information:
1. Edit the respective component files in `src/components/`
2. Commit and push changes to main branch
3. GitHub Actions will automatically redeploy

Your digital CV will be live at: `https://YOUR-USERNAME.github.io/brandon-drake-cv`
