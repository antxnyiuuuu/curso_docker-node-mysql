const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getLibros() {
    return await prisma.libro.findMany();
    
}

async function createBok(data) {
    return await prisma.libro.create({
        data
    });
    
}

async function updateBook(id, data) {
    return await prisma.libro.update({
        where: { id: Number(id) },
        data
    });
}

async function deleteBook(id) {
    return await prisma.libro.delete({
        where: { id: Number(id) }
    });
}

module.exports = {
    getLibros,
    createBok,
    updateBook,
    deleteBook
}

