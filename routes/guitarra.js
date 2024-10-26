const express = require("express");
const router = express.Router();
const guitarraController = require("../controllers/guitarraController");

// GET: Obtener todas las guitarras
router.get("/", guitarraController.getGuitarras);

// GET: Obtener una guitarra por ID
router.get("/:id", guitarraController.getGuitarraById);

// POST: Crear una nueva guitarra
router.post("/", guitarraController.createGuitarra);

// PUT: Actualizar una guitarra
router.put("/:id", guitarraController.updateGuitarra);

// DELETE: Eliminar una guitarra
router.delete("/:id", guitarraController.deleteGuitarra);

module.exports = router;
