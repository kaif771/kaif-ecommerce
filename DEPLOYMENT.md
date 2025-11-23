# Deployment Guide for kaif-ecommerce

This guide will help you deploy your e-commerce website to GitHub and Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed on your computer
- Node.js and npm installed

## 🚀 Step 1: Create GitHub Repository

1. **Go to GitHub** and sign in
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Repository name**: `kaif-ecommerce`
5. **Description**: "Modern e-commerce website built with React and Tailwind CSS"
6. **Visibility**: Choose Public or Private
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. **Click "Create repository"**

## 📤 Step 2: Push Code to GitHub

Open your terminal in the project directory and run:

```bash
# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: kaif.store e-commerce website"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/kaif-ecommerce.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy React apps.

### Option A: Deploy via Vercel Dashboard

1. **Go to [vercel.com](https://vercel.com)** and sign in with GitHub
2. **Click "Add New..." → "Project"**
3. **Import your `kaif-ecommerce` repository**
4. **Configure Project**:
   - Framework Preset: Vite (auto-detected)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. **Click "Deploy"**
6. **Wait for deployment** (usually 1-2 minutes)
7. **Your site will be live!** Vercel provides a URL like `kaif-ecommerce.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI globally**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Yes**
   - Which scope? **Your account**
   - Link to existing project? **No**
   - Project name? **kaif-ecommerce**
   - Directory? **./**
   - Override settings? **No**

5. **For production deployment**:
   ```bash
   vercel --prod
   ```

## 📦 Step 4: Deploy to GitHub Pages (Alternative)

If you want to use GitHub Pages instead:

1. **Update package.json homepage** (already done):
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/kaif-ecommerce"
   ```

2. **Update vite.config.js** to include base path:
   ```js
   export default defineConfig({
     base: '/kaif-ecommerce/',
     plugins: [tailwindcss()],
   })
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **gh-pages** branch
   - Click **Save**
   - Your site will be available at: `https://YOUR_USERNAME.github.io/kaif-ecommerce`

## 🔄 Continuous Deployment

### Vercel
- **Automatic**: Every push to `main` branch automatically deploys
- **Preview Deployments**: Every pull request gets a preview URL

### GitHub Pages
- **Manual**: Run `npm run deploy` after each update
- **Automatic**: Set up GitHub Actions for automatic deployment

## 🔧 Environment Variables (Optional)

If you add Stripe or other services later:

1. **In Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add your variables

2. **In GitHub Pages**:
   - Use GitHub Secrets for CI/CD
   - Or hardcode (not recommended for sensitive data)

## 📝 Post-Deployment Checklist

- [ ] Test all pages on live site
- [ ] Verify cart functionality
- [ ] Check responsive design on mobile
- [ ] Test form submissions
- [ ] Verify all images load correctly
- [ ] Check navigation links
- [ ] Test search functionality
- [ ] Verify authentication flow

## 🐛 Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Images Not Loading
- Check image paths are relative
- Verify images are in `src/assets` folder
- Check browser console for 404 errors

### Routing Issues
- For Vercel: Should work automatically
- For GitHub Pages: Ensure base path is set in `vite.config.js`

## 📞 Support

For issues or questions:
- Email: kaifkhan51371@gmail.com
- Phone: +91 7506860428

---

**Happy Deploying! 🚀**

