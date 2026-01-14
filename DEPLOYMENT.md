# LinkedIn Clone Deployment Guide

## Pre-Configured for Deployment

Your project is already configured for production deployment with:
- CORS updated for Vercel frontend
- Environment variables template ready
- Build scripts configured
- Production-ready API URL handling

## Option 1: Vercel + Render (Recommended)

### Backend Deployment (Render)
1. Go to https://render.com
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your GitHub repo: https://github.com/THECODEZON/OnLinkedin
5. Configure:
   - **Name**: onlinkedin-backend
   - **Runtime**: Node
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: `backend`
6. Add Environment Variables (copy from PRODUCTION_ENV.md):
   ```
   PORT=8000
   MONGODB_URL=mongodb+srv://ddas12181_db_user:OulpsxMVaIUCg0kT@cluster0.wunpawh.mongodb.net/linkedin-clone?appName=Cluster0
   JWT_SECRET=GFDYHKJWS78NDB
   NODE_ENV=production
   CLOUDINARY_CLOUD_NAME=ayusha23
   CLOUDINARY_API_KEY=732178731467656
   CLOUDINARY_API_SECRET=tvh-o_Co74eg5TlCrVwZFp_Tp8U
   ```
7. Click "Create Web Service"

### Frontend Deployment (Vercel)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your repo: https://github.com/THECODEZON/OnLinkedin
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Add Environment Variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://onlinkedin-backend.onrender.com` (update after backend deployment)
7. Click "Deploy"

## Option 2: Railway (Full Stack)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Select: https://github.com/THECODEZON/OnLinkedin
5. Railway will auto-detect and deploy both frontend and backend

## Option 3: Netlify + Render
1. **Backend**: Same as Option 1 (Render)
2. **Frontend**: 
   - Go to https://netlify.com
   - Connect GitHub repo
   - Set root directory to `frontend`
   - Add environment variable `VITE_API_URL`

## What's Already Configured

### CORS Settings
```javascript
// Backend already configured for:
- http://localhost:5173 (development)
- http://127.0.0.1:52317 (browser preview)
- https://onlinkedin.vercel.app (production)
```

### Environment Variables
- Backend `.env.example` template ready
- Frontend uses `VITE_API_URL` for production
- Production environment guide in `PRODUCTION_ENV.md`

### Build Configuration
- Backend: `npm start` script added
- Frontend: Vite build configuration ready
- Both platforms: `.gitignore` files configured

## Quick Deployment Steps

1. **Deploy Backend First** (Render) → Get backend URL
2. **Deploy Frontend** (Vercel) → Use backend URL
3. **Test** → Check API connectivity
4. **Done** → Your LinkedIn clone is live!

## Free Tier Limits
- **Vercel**: 100GB bandwidth/month
- **Render**: 750 hours/month (free tier)
- **Railway**: $5 credit/month
- **Netlify**: 100GB bandwidth/month

## Post-Deployment Checklist
- [ ] Test all API endpoints
- [ ] Verify CORS is working
- [ ] Check real-time features (Socket.io)
- [ ] Test file uploads (Cloudinary)
- [ ] Set up custom domain (optional)
