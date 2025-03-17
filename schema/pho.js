const mongoose = require('mongoose');

const phoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  contactNumber: { type: String, required: true },
  email: { type: String },
  headOfficer: { type: String } 
});

module.exports = mongoose.model('PHO', phoSchema);
