const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function postPrestamo(data) {
    return await prisma.prestamo.create({
        data
    });
}

async function devolverLibro(id) {
    return await prisma.prestamo.update({
        where: { id: Number(id) },
        data: { fecha_devolucion: new Date() }
    });
}

async function verHisorialPorUsuario(usuarioId) {
    return await prisma.historial.findMany({
        where: { usuarioId: Number(usuarioId) },
        include: { libro: true }
    });
}

module.exports = { postPrestamo, devolverLibro, verHisorialPorUsuario };
