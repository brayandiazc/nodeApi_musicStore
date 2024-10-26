const express = require("express");
const router = express.Router();
const Guitarra = require("../models/Guitarra");

// GET: Obtener todas las guitarras
router.get("/", async (req, res) => {
  try {
    const guitarras = await Guitarra.find();
    res.json(guitarras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET: Obtener una guitarra por ID
router.get("/:id", async (req, res) => {
  try {
    const guitarra = await Guitarra.findById(req.params.id);
    if (!guitarra) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    res.json(guitarra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST: Crear una nueva guitarra
router.post("/", async (req, res) => {
  try {
    const guitarra = new Guitarra(req.body);
    const nuevaGuitarra = await guitarra.save();
    res.status(201).json(nuevaGuitarra);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// PUT: Actualizar una guitarra
router.put("/:id", async (req, res) => {
  try {
    const guitarra = await Guitarra.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!guitarra) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    res.json(guitarra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// DELETE: Eliminar una guitarra
router.delete("/:id", async (req, res) => {
  try {
    const guitarraEliminada = await Guitarra.findByIdAndDelete(req.params.id);
    if (!guitarraEliminada) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    res.json({ message: "Guitarra eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
