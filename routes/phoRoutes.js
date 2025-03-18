const express = require('express');
const phoController = require('../controllers/phoController');
const router = express.Router();

router.get('/phos', phoController.getAllPHOs);
router.get('/phos/:id', phoController.getPHOById);
router.post('/phos', phoController.createPHO);
router.put('/phos/:id', phoController.updatePHO);


module.exports = router;
