const  {PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function getTareas() {
    return await prisma.tarea.findMany();
}

async function crearTarea(data) {
    return await prisma.tarea.create({
        data: {
            titulo: data.titulo,
            descripcion: data.descripcion || null,
            usuarioId: data.usuarioId,
            completada: false
        }
    });
}

async function eliminarTarea(id) {
    return await prisma.tarea.delete({
        where: {
            id: parseInt(id)
        }
    });
}

module.exports = {
    getTareas,
    crearTarea,
    eliminarTarea
};