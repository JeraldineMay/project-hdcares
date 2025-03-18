const express = require('express');
const rhuController = require('../controllers/control');
const router = express.Router();

router.get('/rhus', rhuController.getAllRHUs);
router.get('/rhus/:id', rhuController.getRHUById);
router.post('/rhus', rhuController.createRHU);
router.put('/rhus/:id', rhuController.updateRHU);
router.delete('/rhus/:id', rhuController.deleteRHU);

module.exports = router;
