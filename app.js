// Load environment variables
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB Atlas
const uri = "mongodb+srv://hduser:AQCDTKFtJUS8zhAO@cluster0.7njsn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri) 
    .then(() => {
        console.log("✅ Connected to MongoDB Atlas!");
    })
    .catch(err => {
        console.error("❌ Error connecting to MongoDB:", err);
    });

// Import Routes
const patientRoutes = require('./routes/patientRoutes');
const bhwRoutes = require('./routes/bhwRoutes');
const rhuRoutes = require('./routes/rhuRoutes');
const phoRoutes = require('./routes/phoRoutes');

// Use Routes
app.use('/api', patientRoutes);
app.use('/api', bhwRoutes);
app.use('/api', rhuRoutes);
app.use('/api', phoRoutes);

// Define the port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
});
