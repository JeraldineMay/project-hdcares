//npm install or npm i express

require('dotenv').config();
const express = require('express');
const app = express();

// Connect to the database
const { connectDB } = require('./config/db');
connectDB();

const bhwRoutes = require('./routes/bhwRoutes');
const rhuRoutes = require('./routes/rhuRoutes');
const phoRoutes = require('./routes/phoRoutes');

// Use Routes
app.use('/bhw', bhwRoutes);
app.use('/rhu', rhuRoutes);
app.use('/pho', phoRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log({
    message: `Server is running on port ${PORT}`,
  });
});
