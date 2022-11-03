const express = require('express');
const fs = require('fs');

const Contenedor = require('../desafio-express/Contenedor');
const contenedor = new Contenedor('../productos.txt');

const app = express();

const { Router } = require('express');
const routerProduct = Router();


app.listen(8080,()=>console.log("server listening on port 8080"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/productos", routerProduct);
app.use(express.static("index-"));
let productos = [];



//GET
routerProduct.get("/", async (req, res) =>{
    const products = await contenedor.getAll();
    res.status(200).json(products)
})

//GET/:id
routerProduct.get('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await contenedor.getById(id);

    product
        ? res.status(200).json(product)
        : res.status(404).json({error: "Producto no encontrado"});
    
})
//POST
routerProduct.post('/', async (req,res) => {
    const {body} = req;
    const newProductId = await contenedor.save(body);
    res.status(200).send(`Producto agregado con el ID: ${newProductId}`)
})

//PUT /:id
routerProduct.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const wasUpdated = await contenedor.updateById(id,body);
    wasUpdated
        ? res.status(200).send(`El producto de ID: ${id} fue actualizado`)
        : res.status(404).send(`El producto no fue actualizado porque no se encontró el ID: ${id}`);
})

//DELETE
routerProduct.get('/:id', async (req, res) => {
    const {id} = req.params;
    const product = await contenedor.deleteById(id);

    product
        ? res.status(200).json(product)
        : res.status(404).json({error: "Producto no encontrado"});
    
})

