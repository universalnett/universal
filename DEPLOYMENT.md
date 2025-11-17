# Universal Net - GitHub Pages Deployment Guide

## Quick Setup Instructions

### 1. Push your code to GitHub (if not already done)
```bash
git init
git add .
git commit -m "Initial commit - Universal Net website"
git branch -M main
git remote add origin https://github.com/universalnett/universal.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository: https://github.com/universalnett/universal
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### 3. Your website will be available at:
```
https://universalnett.github.io/universal/
```

## What's been configured:

✅ **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
- Automatically builds and deploys on every push to main branch
- Uses Node.js 18 for building
- Removes any lovable dependencies
- Builds the Vite project
- Deploys to GitHub Pages

✅ **Vite Configuration Updated** (`vite.config.ts`)
- Set correct base path for GitHub Pages
- Production builds will work correctly on your subdomain

✅ **Automatic Updates**
- Every time you push changes to the main branch
- GitHub Actions will automatically rebuild and redeploy
- Usually takes 2-3 minutes to complete

## To make changes:
1. Edit your files locally
2. Commit and push to main branch:
   ```bash
   git add .
   git commit -m "Your change description"
   git push origin main
   ```
3. GitHub Actions will automatically deploy the changes!

## First Deployment:
After pushing to GitHub and enabling Pages, your first deployment should start automatically. Check the **Actions** tab in your repository to monitor the deployment progress.