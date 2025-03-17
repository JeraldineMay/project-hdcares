const PHO = require('../models/PHO'); 
exports.getAllPHOs = async (req, res) => {
  try {
    const phos = await PHO.find();
    res.json(phos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getPHOById = async (req, res) => {
  try {
    const pho = await PHO.findById(req.params.id);
    if (!pho) return res.status(404).json({ message: 'PHO not found' });
    res.json(pho);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createPHO = async (req, res) => {
  const { id, name, address, contactNumber, email, headOfficer } = req.body;
  try {
    const newPHO = new PHO({
      id,
      name,
      address,
      contactNumber,
      email,
      headOfficer
    });
    await newPHO.save();
    res.status(201).json(newPHO);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updatePHO = async (req, res) => {
  try {
    const pho = await PHO.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pho) return res.status(404).json({ message: 'PHO not found' });
    res.json(pho);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deletePHO = async (req, res) => {
  try {
    const pho = await PHO.findByIdAndDelete(req.params.id);
    if (!pho) return res.status(404).json({ message: 'PHO not found' });
    res.json({ message: 'PHO deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
