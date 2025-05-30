const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
app.use("/servicios", express.static(path.join(__dirname, "public", "main")));
app.get("/servicios", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main"));
  // Sirve para ligar la ruta de /servicios al archivo servicios.html
});

// app.post("/api/contacto", (req, res) => {
//   return res.status(200).json({ message: "Formulario enviado con éxito" });
// });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
