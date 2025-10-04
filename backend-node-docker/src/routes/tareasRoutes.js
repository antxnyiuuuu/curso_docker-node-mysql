const express = require("express");
const router = express.Router();
const tareaController = require("../controller/tareaController");
const { verificarToken } = require("../middelware/authMiddleware");

router.get("/tareas", verificarToken, tareaController.getTareas);
router.post("/tareas", verificarToken, tareaController.crearTarea);
router.delete("/tareas/:id", verificarToken, tareaController.eliminarTarea);

module.exports = router;