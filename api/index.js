const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectToDatabase = require('./config/db');
const authRoutes = require('./routes/auth');

// Load env vars
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Database connection middleware for serverless
const connectDB = async () => {
  try {
    await connectToDatabase();
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

// Vercel serverless function entry
module.exports = async (req, res) => {
  await connectDB();
  return app(req, res);
};
