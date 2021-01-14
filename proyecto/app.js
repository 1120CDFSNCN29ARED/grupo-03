const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

//Servidor en puerto 3010
app.listen(3010, function () {
  console.log("Server en puerto 3010");
});

//ruta inicial a index.html
app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
// ruta al carrito de compras
app.get("/carrito", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./views/carrito.html"));
});
//ruta al formulario de registro
app.get("/registro", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./views/registro.html"));
});
//ruta al formulario de LogIn
app.get("/login", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
//ruta a detalles de producto
app.get("/producto", function (req, res) {
  res.sendFile(path.resolve(__dirname, "./views/producto.html"));
});
