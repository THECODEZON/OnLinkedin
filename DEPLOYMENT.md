# LinkedIn Clone Deployment Guide

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
6. Add Environment Variables:
   - `PORT=8000`
   - `MONGODB_URL=mongodb+srv://ddas12181_db_user:OulpsxMVaIUCg0kT@cluster0.wunpawh.mongodb.net/linkedin-clone?appName=Cluster0`
   - `JWT_SECRET=GFDYHKJWS78NDB`
   - `NODE_ENV=production`
   - `CLOUDINARY_CLOUD_NAME=ayusha23`
   - `CLOUDINARY_API_KEY=732178731467656`
   - `CLOUDINARY_API_SECRET=tvh-o_Co74eg5TlCrVwZFp_Tp8U`
7. Click "Create Web Service"

### Frontend Deployment (Vercel)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select your repo: https://github.com/THECODEZON/OnLinkedin
5. Configure:
   - **Framework Preset**: Vite
   - **Root Directory**: frontend
   - **Build Command**: `npm run build`
   - **Output Directory**: dist
6. Add Environment Variables:
   - `VITE_API_URL=https://onlinkedin-backend.onrender.com`
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
   - Drag and drop your frontend folder
   - Or connect GitHub repo

## Important Notes

### Update Frontend API URL
Before deploying, update the frontend API URL:
```javascript
// In frontend/src/context/AuthContext.jsx
const serverUrl="https://your-backend-url.onrender.com"
```

### Backend Package.json Update
Add start script to backend/package.json:
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}
```

### CORS Update
Update backend CORS for production:
```javascript
// In backend/index.js
app.use(cors({
    origin:["https://your-frontend-url.vercel.app", "https://your-frontend-url.netlify.app"],
    credentials:true
}))
```

## Free Tier Limits
- **Vercel**: 100GB bandwidth/month
- **Render**: 750 hours/month (free tier)
- **Railway**: $5 credit/month
- **Netlify**: 100GB bandwidth/month

## Post-Deployment Steps
1. Test all API endpoints
2. Update CORS origins if needed
3. Set up custom domain (optional)
4. Monitor usage and logs
