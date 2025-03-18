// Load environment variables
require('dotenv').config();
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database
const { connectDB } = require('./config/db');
connectDB();

// Import Routes
const bhwRoutes = require('./routes/bhwRoutes');
const rhuRoutes = require('./routes/rhuRoutes');
const phoRoutes = require('./routes/phoRoutes');

// Use Routes
app.use('/api', bhwRoutes);
app.use('/api', rhuRoutes);
app.use('/api', phoRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log({
    message: `Server is running on port ${PORT}`,
  });
});
