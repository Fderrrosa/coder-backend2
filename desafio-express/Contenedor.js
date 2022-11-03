const fs = require('fs');

class Contenedor {
    constructor(fileName){
        this.fileName = fileName;
    }

    async createIfNotExist(){
        try{
            await fs.promises.access(this.fileName)
        }catch(err){
            await fs.promises.writeFile(this.fileName, '[]', 'utf8');
        }
    }

    async getAll(){
        try {
            return JSON.parse(await fs.promises.readFile(this.fileName, 'utf8'));
        } catch (error) {
            throw new Error(error);
        }
    }

    async save(content){
        try {
            const data = await this.getAll();
            content.id = (data[data.length - 1].id || 0) + 1;
            data.push(content);
            await fs.promises.writeFile(this.fileName, JSON.stringify(data, null, 2), 'utf8');
        } catch (error) {
            if(error.message.includes('ENOENT')){
                await this.createIfNotExist();
                return this.save(content);
            } else {
                throw new Error(error);
            }
        }
    }

    async getById(id){
        try {
            const data = await this.getAll();
            return data.find(item => item.id == id);
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteById(id){
        try {
            const data = await this.getAll();
            const newData = data.filter(item => item.id != id);
            await fs.promises.writeFile(this.fileName, JSON.stringify(newData, null, 2), 'utf8');
        } catch(error){
            throw new Error(error);
        }
    }

    async deleteAll(){
        try {
            await fs.promises.writeFile(this.fileName, '[]', 'utf8');
        } catch(error){
            throw new Error(error);
        }
    }

    
  getRandomProduct(){
    let data = fs.readFileSync('./productos.txt');
    data = JSON.parse(data);
    let randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex]
  }












//PRUEBA DESAFIO API
async updateById(id, newData) {
    try {
      id = Number(id);
      const data = await this.getData();
      const parsedData = JSON.parse(data);
      const objectIdToBeUpdated = parsedData.find(
        (producto) => producto.id === id
      );
      if (objectIdToBeUpdated) {
        const index = parsedData.indexOf(objectIdToBeUpdated);
        const {title, price, photo} = newData;

        parsedData[index]['title'] = title;
        parsedData[index]['price'] = price;
        parsedData[index]['photo'] = photo;
        await fs.promises.writeFile(this._filename, JSON.stringify(parsedData));
        return true;
      } else {
        console.log(`ID ${id} does not exist in the file`);
        return null;
      }

    } catch (error) {
      `Error Code: ${error.code} | There was an error when trying to update an element by its ID (${id})`
    }
  }


























}

module.exports = Contenedor;