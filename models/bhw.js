const mongoose = require('mongoose');

const bhwSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String },
  assignedArea: { type: String } 
});

module.exports = mongoose.model('BHW', bhwSchema);
