const fs = require('fs');

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo
  }

  async getAll() {
    try {
      const content = await fs.promises.readFile(this.archivo, 'UTF-8')
      // console.log(JSON.parse(content));
      return JSON.parse(content)
    } catch (error) {
      console.log(error);
    }
  } 

  async save(objecto) {
    try {
     let productos = await this.getAll()
     let lastID = productos[productos.length -1].id;
     objecto.id = lastID +1;
     productos.push(objecto)
     await fs.promises.writeFile(this.archivo, JSON.stringify(productos))
    } catch (error) {
      console.log(error);
    }
 }

  async getById(idNum) {
    try {
      let productos = await this.getAll();
      let prodFilter = productos.filter(a => a.id == idNum.id);
      return prodFilter
    } catch (error) {
      console.log(error);
    }
  }

  async deleteById(idNum) {
    try {
      let productos = await this.getAll();
      let prodFilter = productos.filter(a => a.id != idNum.id);
      await fs.promises.writeFile(this.archivo, JSON.stringify(prodFilter))
    } catch (error) {
      console.log(error);
    }
  }

  deleteAll(){
    fs.writeFileSync(this.archivo, "", (error2) => {
    if (error2) {
      throw new Error('Error escribiendo info txt')
    } else {
      console.log("Todos los productos han sido borrados")
    }
  })
  }

}


module.exports = Contenedor;