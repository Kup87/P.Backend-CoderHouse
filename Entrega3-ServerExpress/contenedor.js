const fs = require('fs');

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo
  }

  save(Objecto) {
    let lastID;
    let obtenerInfo;
    fs.readFile(this.archivo, 'UTF-8', (error, contenido) => {
      if (error) {
        console.log("Error leyendo el archivo");
      } else if (contenido === "") {
        lastID = -1;
      } else {
        obtenerInfo = JSON.parse(contenido);
        lastID = obtenerInfo.length - 1;
      }
      Objecto.id = (lastID + 1);
      let conjuntoObjetos = [];
      conjuntoObjetos.push(Objecto);
      if (lastID == -1) {
        fs.writeFile(this.archivo, JSON.stringify(conjuntoObjetos), (error2) => {
          if (error2) {
            throw new Error('Error escribiendo info txt')
          } else {
            console.log("Primer entrada creada")
          }
        })
      } else {
        obtenerInfo.push(Objecto);
        fs.writeFile(this.archivo, JSON.stringify(obtenerInfo), (error2) => {
          if (error2) {
            throw new Error('Error escribiendo info txt')
          } else {
            console.log("Objeto agregado")
          }
        })
      }
    })
  }

  getById(idNum) {
    let obtenerInfo;
    fs.readFile(this.archivo, 'UTF-8', (error, contenido) => {
      if (error) {
        console.log("Error leyendo el archivo");
      } else if (contenido === "") {
        console.log("No hay productos almacenados");
      } else {
        obtenerInfo = JSON.parse(contenido);
        let producto = obtenerInfo.find(x => x.id === idNum)
        if (producto === undefined) {
          console.log("No se encuentra el producto")
        } else {
          console.log(obtenerInfo.find(x => x.id === idNum));
        }
      }
    })
  }

  getAll() {
    let obtenerInfo;
    fs.readFile(this.archivo, 'UTF-8', (error, contenido) => {
      if (error) {
        console.log("Error leyendo el archivo");
      } else if (contenido === "") {
        console.log("No hay productos almacenados");
      } else {
        obtenerInfo = JSON.parse(contenido);
        console.log(obtenerInfo);
      }
    })
  }

  deleteById(idNum) {
    let obtenerInfo;
    fs.readFile(this.archivo, 'UTF-8', (error, contenido) => {
      if (error) {
        console.log("Error leyendo el archivo");
      } else if (contenido === "") {
        console.log("No hay productos almacenados");
      } else {
        obtenerInfo = JSON.parse(contenido);
        let producto = obtenerInfo.find(x => x.id === idNum)
        if (producto === undefined) {
          console.log("No se encuentra el producto")
        } else {
          var newArray = obtenerInfo.filter((item) => item.id !== idNum);
          fs.writeFile(this.archivo, JSON.stringify(newArray), (error2) => {
            if (error2) {
              throw new Error('Error escribiendo info txt')
            } else {
              console.log("Objeto Borrado")
            }
          })
        }
      }
    })
  }

  deleteAll(){
    fs.writeFile(this.archivo, "", (error2) => {
    if (error2) {
      throw new Error('Error escribiendo info txt')
    } else {
      console.log("Todos los productos han sido borrados")
    }
  })
  }

}

module.exports = {
  Contenedor
}