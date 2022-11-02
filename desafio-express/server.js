const express = require('express');
const fs = require('fs');
const Contenedor = require('./Contenedor');

const app = express();
app.listen(8080,()=>console.log("server listening on port 8080"));

const Productos = new Contenedor('../productos.txt');


//app.listen(8080,()=>console.log("server en puerto 8080"));
//const PORT = process.env.PORT || 8080;
//const server = app.listen(PORT, () => {console.log(`El server esta corriendo en el puerto ${PORT}`);});
//app.listen(8080,()=>console.log("server listening on port 8080"));

app.get('/', (req, res) => {
    res.send("<h1 style='color: green'>Bienvenidos al servidor express</h1>")
});


app.get('/productos', async (req, res) => {
    const MostrarProductos = await Productos.getAll();
    res.send(MostrarProductos);
});


app.get('/productosRandom', async (req, res) => {
    const productos = await Productos.getAll();
    const numeroRandom = Math.floor(Math.random() * productos.length);
    res.send(productos[numeroRandom])
}); 



