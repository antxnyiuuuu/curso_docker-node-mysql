const express = require('express');
const router = express.Router();
const { verificarToken } = require("../middelware/authMiddelware");
const prestamoController = require('../controllers/prestamoController');

router.post('/loans', verificarToken, prestamoController.postPrestamo);
router.put('/loans/:id/return', verificarToken, prestamoController.updatePrestamo);
router.get("/loans/history", verificarToken, prestamoController.getPrestamoHistory)

module.exports = router;