# URL Shortener – Backend

A backend service for generating and resolving shortened URLs using Node.js, Express, and MongoDB.

## Features
- Create shortened URLs
- Redirect to original URL
- URL validation
- Click count tracking
- Error handling middleware
- Deployed on Render / Railway / Vercel

## Tech Stack
- Node.js
- Express.js
- MongoDB (Mongoose)
- nanoid
- dotenv
- CORS

## Installation
git clone <your-backend-repo-url>
cd backend
npm install

## Environment Variables
Create a .env file:
MONGO_URI=<your-mongodb-uri>
BASE_URL=<your-backend-domain>
PORT=5000

## Run the Server
Development:
npm run dev

Production:
npm start

## API Endpoints

POST /api/shorten  
Body:
{
  "longUrl": "https://example.com"
}
Response:
{
  "shortUrl": "https://your-domain/abc123",
  "code": "abc123"
}

GET /:code  
Redirects to the original URL.

## Folder Structure
/backend
  ├── server.js
  ├── index.js
  ├── routes/
  ├── controllers/
  ├── models/
  ├── middleware/
  ├── .env
  └── package.json

## Common Issues
- MongoDB connection error → check MONGO_URI
- Route not found → ensure redirect route (/:code) is last

## License
MIT
