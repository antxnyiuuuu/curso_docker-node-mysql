const libroRepository = require("../repositories/libroRepository");

async function getLibros() {
    return await libroRepository.getLibros();
}


async function ceateBook(data) {
    return await libroRepository.createBok(data);
}

async function updateBook(id, data) {
    return await libroRepository.updateBook(id, data);
}

async function deleteBook(id) {
    return await libroRepository.deleteBook(id);
}


module.exports = {
    getLibros,
    ceateBook,
    updateBook,
    deleteBook
}
