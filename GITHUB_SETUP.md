# GitHub Repository Setup Commands

## Step-by-Step Commands

### 1. Initialize Git and Create First Commit

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: kaif.store e-commerce website"
```

### 2. Create GitHub Repository

**Before running git commands, create the repository on GitHub:**

1. Go to: https://github.com/new
2. Repository name: `kaif-ecommerce`
3. Description: "Modern e-commerce website built with React and Tailwind CSS"
4. Choose Public or Private
5. **DO NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### 3. Connect and Push to GitHub

**Replace `YOUR_USERNAME` with your actual GitHub username:**

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/kaif-ecommerce.git

# Rename branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### 4. Deploy to Vercel

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Find and import `kaif-ecommerce` repository
5. Click "Deploy" (Vercel auto-detects Vite settings)
6. Wait for deployment (1-2 minutes)
7. Your site is live! 🎉

## Complete Command Sequence

Copy and paste this entire block (replace YOUR_USERNAME):

```bash
git init
git add .
git commit -m "Initial commit: kaif.store e-commerce website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/kaif-ecommerce.git
git push -u origin main
```

## Troubleshooting

### If you get "remote origin already exists":
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/kaif-ecommerce.git
```

### If you get authentication errors:
- Use GitHub Personal Access Token instead of password
- Or use GitHub CLI: `gh auth login`

### If push fails:
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

**After deployment, your site will be live on Vercel!**

