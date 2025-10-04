const tareasServices = require('../services/tareasServices');

async function getTareas(req, res) {
    try {
        const tareas = await tareasServices.listarTareas();
        console.log(tareas);
        res.status(200).json({message: 'Tareas listadas correctamente', data : tareas});
    }
    catch (error) {
        console.error('Error al listar tareas:', error);
        res.status(500).json({ error: 'Error al listar tareas' });
    }
}

async function crearTarea(req, res) {
    try {
        const tarea = await tareasServices.crearTarea(req.body);
        res.status(201).json({message: 'Tarea creada correctamente', data: tarea});
    }
    catch (error) {
        console.error('Error al crear tarea:', error);
        res.status(500).json({ error: 'Error al crear tarea' });
    }
}

async function eliminarTarea(req, res) {
    try {
        const tarea = await tareasServices.eliminarTarea(req.params.id);
        res.status(200).json({message: 'Tarea eliminada correctamente', data: tarea});
    }
    catch (error) {
        console.error('Error al eliminar tarea:', error);
        res.status(500).json({ error: 'Error al eliminar tarea' });
    }
}

module.exports = {
    getTareas,
    crearTarea,
    eliminarTarea
};