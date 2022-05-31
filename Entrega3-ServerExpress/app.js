const express = require('express')
const app = express()
const PORT = 8080

const Contenedor = require('./contenedor')

app.get('/', (req,res)=>{
    res.send('<h1 style="color:blue">Bienvenidos al servidor Express<h1>')
})

app.get('/productos', async (req,res)=>{
    const contenedor = new Contenedor("productos.txt")
    let prods = await contenedor.getAll()
    res.send(prods)
})

app.get('/productoRandom', async (req,res)=>{
    const contenedor = new Contenedor("productos.txt")
    let prods = await contenedor.getAll()
    let x = prods.length
    let y = Math.floor(Math.random()* parseInt(x))
    res.send(JSON.stringify(prods[y]))
   
})

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})