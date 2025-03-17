const BHW = require('../models/BHW'); 
exports.getAllBHWs = async (req, res) => {
  try {
    const bhws = await BHW.find();
    res.json(bhws);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getBHWById = async (req, res) => {
  try {
    const bhw = await BHW.findById(req.params.id);
    if (!bhw) return res.status(404).json({ message: 'BHW not found' });
    res.json(bhw);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createBHW = async (req, res) => {
  const { id, fullName, age, gender, address, contactNumber, email, assignedArea } = req.body;
  try {
    const newBHW = new BHW({
      id,
      fullName,
      age,
      gender,
      address,
      contactNumber,
      email,
      assignedArea
    });
    await newBHW.save();
    res.status(201).json(newBHW);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateBHW = async (req, res) => {
  try {
    const bhw = await BHW.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bhw) return res.status(404).json({ message: 'BHW not found' });
    res.json(bhw);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deleteBHW = async (req, res) => {
  try {
    const bhw = await BHW.findByIdAndDelete(req.params.id);
    if (!bhw) return res.status(404).json({ message: 'BHW not found' });
    res.json({ message: 'BHW deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
