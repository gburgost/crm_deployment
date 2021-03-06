const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')
const productosController = require('../controllers/productosController')
const pedidosController = require('../controllers/pedidosController')
const usuariosController = require('../controllers/usuariosController')

// middleware para proteger las rutas
const auth = require('../middleware/auth')

module.exports = function() {

  // Agrega nuevos clientes via POST
  router.post('/clientes',
    auth, 
    clienteController.nuevoCliente)

  // Obtener todos los clientes
  router.get('/clientes', 
    auth,
    clienteController.mostrarClientes
  )

  // Muestra un cliente especifico (id)
  router.get('/clientes/:idCliente', 
    auth,
    clienteController.mostrarCliente)

  // Actualizar cliente
  router.put('/clientes/:idCliente', 
    auth,
    clienteController.actualizarCliente)

  // Eliminar cliente
  router.delete('/clientes/:idCliente', 
    auth,
    clienteController.eliminarCliente)


  /** Productos */

  //Nuevos productos
  router.post('/productos', 
    auth,
    productosController.subirArchivo, 
    productosController.nuevoProducto)

  // Muestra todos los productos
  router.get('/productos', 
    auth,
    productosController.mostrarProductos)

  //Muestra un prducto en especifico por su ID
  router.get('/productos/:idProducto', 
    auth,
    productosController.mostrarProducto)

  // Actualizar productos
  router.put('/productos/:idProducto',
    auth,
    productosController.subirArchivo,
    productosController.actualizarProducto
  )

  // Eliminar productos
  router.delete('/productos/:idProducto',
    auth, 
    productosController.eliminarProducto)

  // Busqueda de productos
  router.post('/productos/busqueda/:query', 
    productosController.buscarProducto)

  /** Pedidos */
  //Agrega nuevos pedidos
  router.post('/pedidos/nuevo/:idUsuario', 
    auth,
    pedidosController.nuevoPedido)

  // Mostrar todos los pedidos
  router.get('/pedidos', pedidosController.mostrarPedidos)

  // Mostrar pedido por id
  router.get('/pedidos/:idPedido', 
    auth,
    pedidosController.mostrarPedido)

  // Actualizar pedidos
  router.put('/pedidos/:idPedido', 
    auth,
    pedidosController.actualizarPedido)

  // Eliminar un pedido
  router.delete('/pedidos/:idPedido', 
    auth,
    pedidosController.eliminarPedido)


  /** Usuarios */
  router.post('/crear-cuenta',
    auth,
    usuariosController.registrarUsuario
  )

  router.post('/iniciar-sesion',
    usuariosController.autenticarUsuario
  )

  return router
}