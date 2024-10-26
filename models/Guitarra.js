const mongoose = require("mongoose");

// Definición del esquema para la colección de guitarras
const guitarraSchema = new mongoose.Schema(
  {
    // Campo para el nombre de la guitarra, es obligatorio, único, y con longitud mínima y máxima
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      unique: true,
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [50, "El nombre no puede exceder los 50 caracteres"],
    },
    // Campo para el precio de la guitarra, obligatorio y con valor mínimo
    precio: {
      type: Number,
      required: [true, "El precio es obligatorio"],
      min: [100, "El precio debe ser al menos 100"],
      max: [10000, "El precio no puede exceder los 10000"],
    },
    // Campo para la marca de la guitarra, opcional pero con longitud máxima
    marca: {
      type: String,
      maxlength: [30, "La marca no puede exceder los 30 caracteres"],
    },
    // Campo para la cantidad en stock, obligatorio con valor mínimo y valor predeterminado
    stock: {
      type: Number,
      required: [true, "El stock es obligatorio"],
      min: [0, "El stock no puede ser negativo"],
      default: 0,
    },
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
