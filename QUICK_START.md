# Quick Start Guide - Deploy kaif-ecommerce

## 🚀 Quick Deployment Steps

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `kaif-ecommerce`
3. Description: "Modern e-commerce website built with React and Tailwind CSS"
4. Choose Public or Private
5. **DO NOT** check any boxes (README, .gitignore, license)
6. Click "Create repository"

### 2. Push to GitHub

Copy and paste these commands in your terminal (replace YOUR_USERNAME):

```bash
git init
git add .
git commit -m "Initial commit: kaif.store e-commerce website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kaif-ecommerce.git
git push -u origin main
```

### 3. Deploy to Vercel (Easiest Method)

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import `kaif-ecommerce` repository
5. Click "Deploy" (settings are auto-detected)
6. Wait 1-2 minutes
7. Your site is live! 🎉

### 4. (Optional) Deploy to GitHub Pages

If you want GitHub Pages instead:

1. Update `vite.config.js` - uncomment the base path:
   ```js
   base: '/kaif-ecommerce/',
   ```

2. Update `package.json` homepage (replace YOUR_USERNAME):
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/kaif-ecommerce"
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages:
   - Go to repository → Settings → Pages
   - Source: `gh-pages` branch
   - Save

## ✅ Done!

Your website is now live on Vercel or GitHub Pages!

---

**Need Help?**
- Email: kaifkhan51371@gmail.com
- Phone: +91 7506860428

