const express = require("express");
const path = require("path");
const methodOverride = require('method-override');
const app = express();
const publicPath = path.resolve(__dirname, "./public");


//RUTAS
const rutaIndex = require("./routes/index.js");
const rutaCarrito = require("./routes/carrito.js");
const rutaLogin = require("./routes/login.js");
const rutaRegistro = require("./routes/registro.js");
const rutaProducto = require("./routes/producto.js");
app.use(express.static(publicPath));

app.use(methodOverride('_method'));
//app.use((req,res,next)=> {
//res.status(404).send('NO ENCONTRADA');

//} )

//esto lo agrgo para probar POST
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Servidor en puerto 3010
app.listen(3010, function () {
  console.log("Server en puerto 3010");
});

app.set("view engine", "ejs");
app.use(express.static("public"));

//ruta inicial a index.html
app.use("/", rutaIndex);

// ruta al carrito de compras
app.use("/carrito", rutaCarrito);

//ruta al formulario de LogIn
app.use("/login", rutaLogin);

//ruta al formulario de registro
app.use("/registro", rutaRegistro);
//ruta a detalles de producto
app.use("/producto", rutaProducto);
