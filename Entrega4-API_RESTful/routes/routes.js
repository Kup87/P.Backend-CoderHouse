const express = require('express');
const { Router } = express;
const router = Router();
const {getProductos, getProductoById, addProductos, putProductoById, deleteProductoById } = require('../controllers/productos.js')

router.get('/productos', async (req,res)=>{
    let productos =  await getProductos();
    res.send(productos)
})

router.get('/productos/:id', async (req,res)=>{
    let producto = await getProductoById(req.params);
    res.send(producto)
})

router.post('/productos', async (req,res)=>{
    let productos = await addProductos(req.body)
    res.send(productos)
})

router.put('/productos/:id', async (req,res)=>{
    let newProducto = req.body;
    let producto = await putProductoById(req.params, newProducto);
    res.send(producto)
})

router.delete('/productos/:id', async (req,res)=>{
    let producto = await deleteProductoById(req.params);
    res.send({"messagge": "Deleted", ...producto})
})

module.exports = {
    router
 }