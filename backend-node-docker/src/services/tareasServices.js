const tareasRepository = require('../repositories/tareasRepository');

async function listarTareas() {
    try {
        return await tareasRepository.getTareas();
    } catch (error) {
        console.error('Error en listarTareas service:', error);
        throw error;
    }
}

async function crearTarea(data) {
    try {
        return await tareasRepository.crearTarea(data);
    } catch (error) {
        console.error('Error en crearTarea service:', error);
        throw error;
    }
}

async function eliminarTarea(id) {
    try {
        return await tareasRepository.eliminarTarea(id);
    } catch (error) {
        console.error('Error en eliminarTarea service:', error);
        throw error;
    }
}

module.exports = {
    listarTareas,
    crearTarea,
    eliminarTarea
};
