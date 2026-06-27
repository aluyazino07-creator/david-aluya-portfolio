# 📋 Deployment Guide

This guide will help you deploy your portfolio to various platforms.

## 🌐 Vercel (Recommended - Free & Easy)

Vercel is the easiest way to deploy a React app.

### Steps:

1. **Sign up at [vercel.com](https://vercel.com)**

2. **Connect your GitHub repository**
   - Import your project
   - Vercel auto-detects it's a Vite app

3. **Configure**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Environment Variables: (leave empty for now)

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in seconds!

5. **Custom Domain**
   - Go to Settings → Domains
   - Add your custom domain

## 🚀 Netlify

### Steps:

1. **Sign up at [netlify.com](https://netlify.com)**

2. **Connect GitHub**
   - Click "New site from Git"
   - Select your repository

3. **Configure**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   - Netlify will build and deploy automatically

5. **Add custom domain** in Settings

## 📦 GitHub Pages

### Steps:

1. **Update `vite.config.js`**
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     base: '/david-aluya-portfolio/',  // Change to your repo name
     plugins: [react()],
     server: {
       port: 3000,
       open: true
     }
   })
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Update `package.json`**
   ```json
   {
     "homepage": "https://aluyazino07-creator.github.io/david-aluya-portfolio/",
     // ... rest of config
   }
   ```

4. **Commit and push**
   ```bash
   git add -A
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / docs

## 🏠 Self-Hosted

### Using Node.js

1. **Build project**
   ```bash
   npm run build
   ```

2. **Copy `dist` folder to your server**

3. **Install a simple HTTP server**
   ```bash
   npm install -g serve
   serve -s dist
   ```

### Using Nginx

1. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/portfolio/dist;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

2. **Restart Nginx**
   ```bash
   sudo systemctl restart nginx
   ```

## 🔒 Set Up Custom Domain

### For .com, .io, etc. domains:

1. **Register domain** at [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), etc.

2. **Add DNS records**
   - Go to your domain registrar
   - Add A record pointing to your hosting IP
   - Or use CNAME if hosting on Vercel/Netlify

3. **Update DNS settings** with your hosting provider

## 🔄 Continuous Deployment

All platforms (Vercel, Netlify, GitHub Pages) support automatic deployment:

1. Push to GitHub
2. Platform automatically rebuilds and deploys
3. Your site updates instantly!

## 📊 SEO Setup

After deployment:

1. **Add to Google Search Console**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain
   - Verify ownership

2. **Submit sitemap**
   - Most platforms auto-generate sitemaps
   - Submit at Search Console

3. **Monitor performance**
   - Track clicks and impressions
   - Fix any indexing issues

## ⚡ Performance Optimization

Before deploying:

1. **Build analysis**
   ```bash
   npm run build
   npm install -g serve
   serve -s dist
   ```

2. **Check Lighthouse**
   - Open DevTools → Lighthouse
   - Run audit
   - Fix any issues

## 🐛 Troubleshooting

### Build fails
- Check Node.js version: `node --version`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check for syntax errors

### Blank page after deploy
- Check browser console for errors
- Verify `base` setting in `vite.config.js`
- Check that assets are loading (Network tab)

### 404 on refresh (SPA routing)
- Configure hosting to serve `index.html` for all routes
- Vercel/Netlify handle this automatically

## 📈 Post-Deployment Checklist

- [ ] Domain is working
- [ ] Site loads on mobile
- [ ] All links work
- [ ] Contact form works
- [ ] Images load properly
- [ ] Animations are smooth
- [ ] No console errors
- [ ] SEO tags are correct
- [ ] Performance is good
- [ ] Analytics set up (optional)

## 🎉 You're Live!

Your portfolio is now online and ready to impress! 🚀
