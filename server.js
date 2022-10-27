const express = require('express');
const app = express();

//PUERTO
const PORT=8080;

//IMPORT DE LAS CLASES
const Container = require('./productos.txt');
const productosContainer = new Container();

//RUTAS - ENDPOINTS

//Obtener todos los productos
app.get('/productos', (req, res) => {
    let allProducts = productosContainer.getAll();
    if (allProducts.length > 0) {
        res.status(200).send(allProducts);
    } else {
        res.status(404).send('No hay productos');
    }
});

//Obtener un producto aleatorio
app.get('/productosRandom', (req, res) => {
    let randomProduct = productosContainer.getRandomProduct();
    if (randomProduct) {
        res.status(200).send(randomProduct);
    } else {
        res.status(404).send('No hay productos');
    }
});


//INICIO DEL SERVIDOR EN EL PUERTO 8080
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
server.on('error', (err) => {
    console.log(`Error: ${err}`);
});