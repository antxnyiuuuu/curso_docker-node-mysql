const libroService = require('../services/libroServices')


async function getLibros(req, res) {
    try {
        const libros = await libroService.getLibros();
        console.log(libros);
        res.status(200).json({message: "Libros obtenidas correctamente", data: libros});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });  
    }
}
async function createBok(req, res) {
    try {
        const libro = await libroService.ceateBook(req.body);
        res.status(201).json({message: "Libro creado correctamente", data: libro});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });  
    }
    
}

async function updateBook(req, res) {
    try {
        const { id } = req.params;
        const updatedBook = await libroService.updateBook(id, req.body);
        if (updatedBook) {
            res.status(200).json({ message: "Libro actualizado correctamente", data: updatedBook });
        } else {
            res.status(404).json({ message: "Libro no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const deletedBook = await libroService.deleteBook(id);
        if (deletedBook) {
            res.status(200).json({ message: "Libro eliminado correctamente", data: deletedBook });
        } else {
            res.status(404).json({ message: "Libro no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getLibros,
    createBok,
    updateBook,
    deleteBook
}