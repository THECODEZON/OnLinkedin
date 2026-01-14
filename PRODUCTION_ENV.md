# Production Environment Variables Template

## Backend Environment Variables
Copy these to your deployment platform (Render/Railway):

```
PORT=8000
MONGODB_URL=mongodb+srv://ddas12181_db_user:OulpsxMVaIUCg0kT@cluster0.wunpawh.mongodb.net/linkedin-clone?appName=Cluster0
JWT_SECRET=GFDYHKJWS78NDB
NODE_ENV=production
CLOUDINARY_CLOUD_NAME=ayusha23
CLOUDINARY_API_KEY=732178731467656
CLOUDINARY_API_SECRET=tvh-o_Co74eg5TlCrVwZFp_Tp8U
```

## Frontend Environment Variables
Copy these to your deployment platform (Vercel/Netlify):

```
VITE_API_URL=https://your-backend-url.onrender.com
```

## Important Notes

1. **Backend URL**: Replace `your-backend-url.onrender.com` with your actual Render URL
2. **Frontend URL**: Already configured for `https://onlinkedin.vercel.app`
3. **CORS**: Backend already configured to accept requests from Vercel
4. **Security**: Never expose your `.env` file in production

## Deployment URLs After Setup

- **Frontend**: https://onlinkedin.vercel.app
- **Backend**: https://your-backend-url.onrender.com
- **API Endpoints**: https://your-backend-url.onrender.com/api/*
