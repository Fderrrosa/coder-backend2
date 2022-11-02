/*const express = require('express');
const fs = require('fs');
const Contenedor = require('./contenedor');

const app = express();
const PORT = process.env.PORT || 8080;
const Contenedor = new Contenedor('productos.txt');

app.listen(8080,()=>console.log("server en puerto 8080"));


const server = app.listen(PORT, () => {
    console.log(`El server esta corriendo en el puerto ${PORT}`);
});


app.get('/productos', async (req, res) => {
    const productos = await Contenedor.getAll();
    res.json(productos);
});

app.get('/productoRandom', async (req, res) => {
    const products = await Contenedor.getAll();
    res.json(products[Math.floor(Math.random() * products.length)]);
});

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    var html = fs.readFileSync('./index.html');
    res.write(html);
    res.end();
});

*/
 const http = require("http");

 const server = http.createServer((request, response)=>{
    console.log("El servidor a recibido una solicitud")
    const currentDate = new Date();
    const hour = currentDate.getHours();
    console.log(hour)
    if(hour>6 && hour<12){
        response.end("Buenos dias")
    } else if(hour>12 && hour<20){
        response.end("Buenas tardes")
    } else{
        response.end("Buenas noches")
    }
})

 server.listen(8080,()=>console.log("Servidor corriendo en el puerto 8080"));