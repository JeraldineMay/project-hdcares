const mongoose = require('mongoose');
const patientSchema = new mongoose.Schema({
  Id: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true  },
  gender: { type: String, required: true, enum: ['Male', 'Female', 'Other'] },
  address: { type: String, required: true },
  contactNumber: { type: String },
  email: { type: String, required: true, unique: true },
  category: { type: String, required: true, unique: true },
  medicalHistory: { type: [String], default: [] }, 
  createdAt: { type: Date, default: Date.now },
});

module.exports = patientSchema
 
