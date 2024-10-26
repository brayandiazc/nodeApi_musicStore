const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

// Rutas para usuarios
router.get("/", usuarioController.getUsuarios); // Obtener todos los usuarios
router.get("/:id", usuarioController.getUsuarioById); // Obtener un usuario por ID
router.post("/", usuarioController.createUsuario); // Crear un nuevo usuario
router.put("/:id", usuarioController.updateUsuario); // Actualizar un usuario por ID
router.delete("/:id", usuarioController.deleteUsuario); // Eliminar un usuario por ID

module.exports = router;
