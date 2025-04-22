// const express = require('express');
// const app = express();
// const cors = require('cors');
// require('dotenv').config(); // Load .env file for secrets

// // Import routes
// const fruitRoutes = require('./routes/fruitsRoutes');
// const userRoute = require('./routes/userRoute.js');
// const paymentRoutes = require('./routes/paymentRoutes');
// const orderRoutes=require('./routes/orderRoutes.js')

// // Connect to MongoDB
// require('../database/db.js');

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use('/api/orders', orderRoutes);

// // Routes
// app.use('/api/fruits', fruitRoutes);
// app.use('/api/users', userRoute);
// app.use('/api/payments', paymentRoutes);

// app.post('/test', (req, res) => {
//     res.send('Server is working!');
// });
  
// // Server listener
// const port = process.env.PORT || 8080;
// app.listen(port, () => console.log(`✅ Server running on port ${port}`));

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // Load .env file for secrets

// Import routes
import fruitRoutes from './routes/fruitsRoutes.js';
import userRoute from './routes/userRoute.js';
import orderRoutes from './routes/orderRoutes.js';


// Connect to MongoDB
import '../database/db.js';

// Initialize app
const app = express();

// Middlewares
app.use(
  cors({
      origin: process.env.NODE_ENV === 'production' ? 'https://fresh-mart.vercel.app' : '*',
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

// Server listener
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
