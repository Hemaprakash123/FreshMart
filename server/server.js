import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Import routes
import fruitRoutes from './routes/fruitsRoutes.js';
import userRoute from './routes/userRoute.js';
import orderRoutes from './routes/orderRoutes.js';

// Connect to MongoDB
const mongourl = 'mongodb+srv://hemaprakash:hemaprakash123$@cluster0.dp4do.mongodb.net/ecommerce';

mongoose.connect(mongourl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log("✅ MongoDB connection successful");
});

db.on('error', (err) => {
  console.error("❌ MongoDB connection error: ", err);
});

db.on('disconnected', () => {
  console.warn("⚠️ MongoDB connection disconnected");
});

// Initialize app
const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.NODE_ENV === 'production' ? 'https://freshmart-frontend-b4bx.onrender.com' : '*',
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use('/api/orders', orderRoutes);
app.use('/api/fruits', fruitRoutes);
app.use('/api/users', userRoute);

// Test route
app.post('/test', (req, res) => {
  res.send('Server is working!');
});

// Start server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
