const express = require('express');
const router = express.Router();
const { verificarToken } = require("../middelware/authMiddelware");
const libroController = require('../controllers/libroController');


router.get('/libros', verificarToken, libroController.getLibros)
router.post('/libros', verificarToken, libroController.createBok)
router.put('/libros/:id', verificarToken, libroController.updateBook)
router.delete('/libros/:id', verificarToken, libroController.deleteBook)

module.exports = router;