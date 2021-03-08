const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/', productoController.producto);
router.get('/nuevo', productoController.crearProducto);
router.post('/nuevo',productoController.guardarProducto)
router.get('/editar/:id', productoController.editarProducto);
router.put('/editar', productoController.editado);

module.exports = router;