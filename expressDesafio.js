const express = require ('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Servidor prendido escuchando puerto: ${PORT}`);
})

let productos = []

//peticion
app.get('/productos', (req, res)=>{
    res.send('hola')
})

app.get('/productoRandom', (req, res)=>{
    res.send('hola3')
})


//por si hay algun error
server.on('error', (err)=>{err})

