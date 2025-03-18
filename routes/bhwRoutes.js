const express = require('express');
const bhwController = require('../controllers/control'); 
const router = express.Router();

router.get('/bhws', bhwController.getAllBHWs);
router.get('/bhws/:id', bhwController.getBHWById);
router.post('/bhws', bhwController.createBHW);
router.put('/bhws/:id', bhwController.updateBHW);
router.delete('/bhws/:id', bhwController.deleteBHW);

module.exports = router;
