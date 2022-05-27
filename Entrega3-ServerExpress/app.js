const express = require('express')
const app = express()
const PORT = 8080



// const {Contenedor} = require('./contenedor')

app.get('/', (req,res)=>{
    res.send('<h1 style="color:blue">Bienvenidos al servidor Express<h1>')
})

app.get('/productos', (req,res)=>{
    res.send(getAll())
})

// app.get('/productoRandom', (req,res)=>{
//     let randomNum =  aleatorio(minimo,maximo){
//         return Math.round(Math.random() * (maximo - minimo) + minimo);
//       }
//     let 
//     res.send(getAll())
// })


app.listen(PORT, ()=>{
    console.log(`Servidor Express ON`);
})


























const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})