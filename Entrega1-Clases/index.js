class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas
    }
    
    getFullName(){
        return `Mi nombre completo es ${this.nombre} ${this.apellido}`
    }

    addMascota(newMascota){
        this.mascotas.push(newMascota)
    }

    countMascotas(){
        let length = this.mascotas.length
        return length
    }

    addBook(titulo,autor){
        let Libro = {Titulo: titulo, Autor: autor};
        this.libros.push(Libro);
      }

    getBookNames(){
        let bookNames = []
        this.libros.forEach(Libro => {
            bookNames.push(Libro.Titulo)
        });
        return bookNames
    }
}

let User1 = new Usuario("Damian", "Kuperman",[{Titulo: "Lord of the Rings", Titulo: "J. R. R. Tolkien"},{Titulo: "El Nombre del Viento", Titulo: "Patrick Rothfuss"}],["Firulais", "Jaga"])

console.log(User1.getFullName())
User1.addMascota("Rocco")
console.log(User1.countMascotas())
User1.addBook("Ficciones","Jorge Luis Borges")
console.log(User1.getBookNames())
