const fs = require('fs');
const productos = require('./productos');

class Contenedor {
    constructor (data){
        this.data = data
        this.productos = []
        console.log("Iniciando");
    }
    
   async save(productos){
    if (productos instanceof productos === false) {
        console.log('el parametro no es de tipo Product')
        return
    }
    Contenedor.count++
    productos.id = Contenedor.count
    this.#add(productos)
    await this.#writeInDisk()
    return productos.id
   }



}













