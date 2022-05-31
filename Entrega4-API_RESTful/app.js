const express = require('express')
const { router } = require('./routes/routes.js');
const app =  express()
const PORT = 8080
app.use('/api', router);

app.get('/', (req,res)=>{
    res.send('<h1 style="color:blue">Bienvenidos al servidor Express<h1>')
})

const server = app.listen(PORT, ()=>{
    console.log(`Bienvenido al servidor Express, corriendo en el puerto ${server.address().port}`);
})
server.on("error", error => console.log(`Error en servidor ${error}`))

