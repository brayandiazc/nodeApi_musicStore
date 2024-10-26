const Guitarra = require("../models/Guitarra");

// Obtener todas las guitarras
exports.getGuitarras = async (req, res) => {
  try {
    const guitarras = await Guitarra.find();
    res.json(guitarras);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener una guitarra por ID
exports.getGuitarraById = async (req, res) => {
  try {
    const guitarra = await Guitarra.findById(req.params.id);
    if (!guitarra) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    res.json(guitarra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear una nueva guitarra
exports.createGuitarra = async (req, res) => {
  try {
    const guitarra = new Guitarra(req.body);
    const nuevaGuitarra = await guitarra.save();
    console.log(
      `Nueva guitarra creada: ${nuevaGuitarra.nombre}, Precio: ${nuevaGuitarra.precio}`
    );
    res.status(201).json(nuevaGuitarra);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar una guitarra
exports.updateGuitarra = async (req, res) => {
  try {
    const guitarra = await Guitarra.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    console.log(`Guitarra actualizada: ${guitarra.nombre}`);
    if (!guitarra) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    res.json(guitarra);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminar una guitarra
exports.deleteGuitarra = async (req, res) => {
  try {
    const guitarraEliminada = await Guitarra.findByIdAndDelete(req.params.id);
    if (!guitarraEliminada) {
      return res.status(404).json({ message: "Guitarra no encontrada" });
    }
    console.log(`Guitarra eliminada: ${guitarraEliminada.nombre}`);
    res.json({ message: "Guitarra eliminada" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
