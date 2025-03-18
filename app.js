// Load environment variables
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to MongoDB Atlas");
  } catch (err) {
    console.error("  MongoDB Connection Error:", err);
    process.exit(1);
  }
};
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
    message: `🚀 Server is running on port ${PORT}`,
  });
});
