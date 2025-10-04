const prestamoRepository = require('../repositories/prestamoRepository');

async function postPrestamo(data) {
    return await prestamoRepository.postPrestamo(data);
}

async function devolverLibro(id) {
    return await prestamoRepository.devolverLibro(id);
}

async function verHisorialPorUsuario(usuarioId) {
    return await prestamoRepository.verHisorialPorUsuario(usuarioId);
}

module.exports = { postPrestamo, devolverLibro, verHisorialPorUsuario };