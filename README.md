# Linkedin
# Linkedin
# LinkedIn Clone

A full-stack LinkedIn clone built with React, Node.js, Express, and MongoDB.

## Features
- User authentication (Login/Signup)
- Profile management
- Post creation and interaction
- Network/connections
- Real-time notifications
- Responsive design with Tailwind CSS

## Tech Stack
- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express, Socket.io
- **Database**: MongoDB Atlas
- **Authentication**: JWT
- **File Upload**: Cloudinary

## Quick Start

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Update .env with your MongoDB URL and other credentials
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options
1. **Vercel + Render** (Recommended)
2. **Railway** (Full-stack)
3. **Netlify + Render**

## Environment Variables

### Backend (.env)
```
PORT=8000
MONGODB_URL=your_mongodb_url
JWT_SECRET=your_jwt_secret
NODE_ENV=development
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

### Frontend
```
VITE_API_URL=http://localhost:8000
```

## API Endpoints

- `/api/auth` - Authentication
- `/api/user` - User management
- `/api/post` - Post operations
- `/api/connection` - Network connections
- `/api/notification` - Notifications

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License
This project is licensed under the ISC License.
