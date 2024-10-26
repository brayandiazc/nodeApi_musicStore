const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    guitarras: [{ type: mongoose.Schema.Types.ObjectId, ref: "Guitarra" }], // Arreglo de referencias a guitarras
  },
  {
    timestamps: true,
  }
);

const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario;
