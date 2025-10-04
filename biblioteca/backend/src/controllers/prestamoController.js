const prestamoService = require('../services/prestamoServices');

async function postPrestamo(req, res) {
    try {
        const prestamo = await prestamoService.postPrestamo(req.body);
        res.status(201).json({message: "Préstamo creado correctamente", data: prestamo});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });  
    }
}

async function updatePrestamo(req, res) {
    try {
        const prestamo = await prestamoService.updatePrestamo(req.params.id);
        res.status(200).json({message: "Préstamo actualizado correctamente", data: prestamo});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });  
    }
}

async function verHisorialPorUsuario(req, res) {
    try {
        const historial = await prestamoService.verHisorialPorUsuario(req.params.usuarioId);
        res.status(200).json({message: "Historial obtenido correctamente", data: historial});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });  
    }
}

module.exports = {postPrestamo, verHisorialPorUsuario, updatePrestamo};