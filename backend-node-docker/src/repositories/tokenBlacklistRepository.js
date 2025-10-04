const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

async function agregarToken(token) {
    // Verificar si el token ya existe
    const tokenExiste = await prisma.tokenRevocado.findUnique({
        where: { token }
    });
    
    if (tokenExiste) {
        return tokenExiste; // Ya está revocado, devolver el registro existente
    }
    
    // Si no existe, crearlo
    return await prisma.tokenRevocado.create({data: {token}});
}

async function estaRevocado(token) {
    const registro = await prisma.tokenRevocado.findUnique({where: {token}})
    return !!registro
}

module.exports = {
    agregarToken,
    estaRevocado
}