# GitHub Pages Deployment Instructions

## Step 1: Push Your Code to GitHub

```bash
# Add all changes
git add .

# Commit changes
git commit -m "Configure portfolio for GitHub Pages deployment"

# Push to GitHub
git push origin main
```

## Step 2: Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/zhenghchen/portfolio`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions**
5. Save the settings

## Step 3: The Deployment Will Happen Automatically!

- GitHub Actions will automatically build and deploy your site
- This happens every time you push to the `main` branch
- You can watch the progress in the **Actions** tab

## Step 4: Access Your Live Portfolio

Your portfolio will be live at:
**https://zhenghchen.github.io/portfolio**

## Checking Deployment Status

1. Go to the **Actions** tab in your repository
2. You'll see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, visit your site!

## Future Updates

Whenever you want to update your portfolio:
1. Make your changes locally
2. Commit and push to GitHub
3. GitHub Actions will automatically rebuild and deploy!

## Troubleshooting

If the site doesn't work:
- Make sure GitHub Pages is enabled in Settings
- Check the Actions tab for any build errors
- Wait a few minutes after the first deployment
- Make sure the repository name is "portfolio"

---

**Your portfolio is ready to go live! 🎉**

