const express = require('express');
const fs = require('fs');
const Contenedor = require('./contenedor');

const app = express();
const PORT = process.env.PORT || 8080;
const contenedor = new Contenedor('productos.txt');

app.listen(8080,()=>console.log("server listening on port 8080"));


const server = app.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
});


app.get('/productos', async (req, res) => {
    const products = await contenedor.getAll();
    res.json(products);
});


app.get('/productoRandom', async (req, res) => {
    const products = await contenedor.getAll();
    res.json(products[Math.floor(Math.random() * products.length)]);
});

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    var html = fs.readFileSync('./index.html');
    res.write(html);
    res.end();
});