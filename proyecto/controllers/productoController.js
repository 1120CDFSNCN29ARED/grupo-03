//const { query } = require("express");
const { json } = require('express');
const fs = require('fs');
const productoController = {
  producto: (req, res) => {
    res.locals.title = ".: PetShop - Productos :.";

    res.render("producto");
  },
  crearProducto: (req, res) => {
    res.locals.title = ".: PetShop - Nuevo Producto :.";
    res.render("crearproducto");
  },
  guardarProducto: (req, res) => {
    res.locals.title = ".: PetShop - Nuevo Producto :.";

    let productoNuevo = {
      nombre: req.body.nombre,
      precio: req.body.precio,
    };

    //  FALTA GUARDAR EL PRODUCTO NUEVO !!
    let productosExistentes = fs.readFileSync('productos.json', {encoding: 'utf-8'});
    let productos;
    
    if(productosExistentes == ""){
     productos = [];

    }else {
     productos = JSON.parse(productosExistentes);
    }
    productos.push(productoNuevo);

    let productoJSON = JSON.stringify(productos);
    fs.writeFileSync('productos.json', productoJSON);
    

    res.redirect("/producto/nuevo");
    console.log(productoNuevo);
  },

  editarProducto: (req, res) => {
    res.locals.title = ".: PetShop - Editar Producto :.";
    let idProducto = req.params.id;

   let leyendoProductos = fs.readFileSync('productos.json', {encoding: 'utf-8'});
    let productosAEditar = JSON.parse(leyendoProductos);




    let productoToEdit = productosAEditar[idProducto];

    res.render("editarProducto", { productoToEdit: productoToEdit });
  },

  editado: (req, res) => {
    res.send("Producto editado");
  },
};

module.exports = productoController;
