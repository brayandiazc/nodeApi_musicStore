const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/guitarras", require("./routes/guitarra"));
app.use("/api/usuarios", require("./routes/usuario"));

// Función para mostrar las URLs como enlaces en la consola
const showApiLinks = (port) => {
  console.log(`\nAPI disponible en las siguientes rutas:`);
  console.log(`- Guitarras (GET): http://localhost:${port}/api/guitarras`);
  console.log(`- Guitarras (POST): http://localhost:${port}/api/guitarras`);
  console.log(`- Guitarras (PUT): http://localhost:${port}/api/guitarras/:id`);
  console.log(
    `- Guitarras (DELETE): http://localhost:${port}/api/guitarras/:id`
  );
  console.log(`- Usuarios (GET): http://localhost:${port}/api/usuarios`);
  console.log(`- Usuarios (POST): http://localhost:${port}/api/usuarios`);
  console.log(`- Usuarios (PUT): http://localhost:${port}/api/usuarios/:id`);
  console.log(`- Usuarios (DELETE): http://localhost:${port}/api/usuarios/:id`);
};

// Iniciar el servidor y mostrar las rutas
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  showApiLinks(PORT);
});
