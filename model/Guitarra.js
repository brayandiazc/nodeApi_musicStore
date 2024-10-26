const mongoose = require("mongoose");

// Definición del esquema para la colección de guitarras
const guitarraSchema = new mongoose.Schema(
  {
    // Campo para el nombre de la guitarra, es obligatorio
    nombre: { type: String, required: true },
    // Campo para el precio de la guitarra, es obligatorio
    precio: { type: Number, required: true },
  },
  {
    // Añade campos de timestamps (createdAt y updatedAt)
    timestamps: true,
  }
);

// Creación del modelo Guitarra basado en el esquema guitarraSchema
const Guitarra = mongoose.model("Guitarra", guitarraSchema);

// Exportación del modelo Guitarra para su uso en otras partes de la aplicación
module.exports = Guitarra;
