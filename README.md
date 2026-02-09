# Fidelity Investment Web Application

A full-stack web application for Fidelity Investment with a clean HTML/CSS/JS frontend and a secure Node.js/Express backend with MongoDB.

## Project Structure

```
fidelity-project/
├── index.html              # Main homepage
├── style.css               # Main stylesheet
├── style.js                # Main JavaScript
├── js/
│   └── api.js              # API service for frontend
├── css/
│   └── forms.css           # Auth form styles
├── pages/
│   ├── login.html          # Login page
│   └── open-account.html   # Registration page
├── backend/
│   ├── src/
│   │   ├── server.js       # Express server
│   │   ├── config/
│   │   │   └── database.js # MongoDB connection
│   │   ├── models/
│   │   │   └── user.model.js
│   │   ├── controllers/
│   │   │   └── auth.controller.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── user.routes.js
│   │   └── middleware/
│   │       ├── auth.middleware.js
│   │       ├── error.middleware.js
│   │       └── notFound.middleware.js
│   ├── .env.example        # Environment variables template
│   └── package.json
└── img/                     # Images and assets
```

## Features

- **Frontend**: Clean HTML/CSS/JS with responsive design
- **Backend**: Secure Node.js/Express API
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT-based authentication
- **Security**: Helmet, CORS, Rate limiting, Password hashing

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   cd fidelity-project
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

4. **Start MongoDB**
   - Local: Make sure MongoDB is running on port 27017
   - Atlas: Update MONGODB_URI in .env

5. **Start the backend server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

6. **Start the frontend**
   - Open `index.html` in a browser using a local server
   - VS Code: Use Live Server extension
   - Python: `python -m http.server 5500`
   - Node: `npx serve .`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/profile` - Get user profile (auth required)

### Users
- `GET /api/users/profile` - Get user profile (auth required)
- `PUT /api/users/profile` - Update user profile (auth required)

## Environment Variables

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/fidelity

# JWT Configuration
JWT_SECRET=your-super-secure-jwt-secret-key
JWT_EXPIRES_IN=7d

# Frontend URL
FRONTEND_URL=http://localhost:5500
```

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure authentication
- **Rate Limiting**: 100 requests per 15 minutes
- **Helmet**: Security headers
- **CORS**: Configured for specific origins
- **Input Validation**: express-validator

## Development

### Running Tests
```bash
cd backend
npm test
```

### Code Style
- ESLint configured for JavaScript
- Prettier for formatting

## Deployment

### Production Considerations
1. Set `NODE_ENV=production`
2. Use strong `JWT_SECRET`
3. Configure proper CORS origins
4. Use MongoDB Atlas or managed service
5. Enable HTTPS
6. Set up proper logging

## License

MIT License
