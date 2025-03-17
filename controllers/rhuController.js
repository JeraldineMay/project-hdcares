const RHU = require('../models/RHU'); 
exports.getAllRHUs = async (req, res) => {
  try {
    const rhus = await RHU.find();
    res.json(rhus);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.getRHUById = async (req, res) => {
  try {
    const rhu = await RHU.findById(req.params.id);
    if (!rhu) return res.status(404).json({ message: 'RHU not found' });
    res.json(rhu);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
exports.createRHU = async (req, res) => {
  const { id, name, address, contactNumber, email, headDoctor } = req.body;
  try {
    const newRHU = new RHU({
      id,
      name,
      address,
      contactNumber,
      email,
      headDoctor
    });
    await newRHU.save();
    res.status(201).json(newRHU);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.updateRHU = async (req, res) => {
  try {
    const rhu = await RHU.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rhu) return res.status(404).json({ message: 'RHU not found' });
    res.json(rhu);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
exports.deleteRHU = async (req, res) => {
  try {
    const rhu = await RHU.findByIdAndDelete(req.params.id);
    if (!rhu) return res.status(404).json({ message: 'RHU not found' });
    res.json({ message: 'RHU deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
