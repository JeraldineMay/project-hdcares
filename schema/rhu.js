const mongoose = require('mongoose');

const rhuSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  rhuName: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String },
  headDoctor: { type: String } 
});

module.exports = rhuSchema
