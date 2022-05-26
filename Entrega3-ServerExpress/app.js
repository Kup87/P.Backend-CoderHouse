const express = requiere('express')
const app = express()
const PORT = 8080

app.get('/', (req,res)=>{
    res.send(`Bienvenidos al servidor Express`)
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`);
})


























const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
})