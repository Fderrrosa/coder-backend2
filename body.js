class DatosU {
    constructor(nombre, apellido, mascotas, libros){
        this._nombre = nombre;
        this._apellido = apellido;
        this._mascotas = mascotas;
        this._libros = libros;
    }

    getFullName() {
        return `${this._nombre} ${this._apellido}`;
    }

    addMascota(nombreMascota) {
        this._mascotas.push(nombreMascota);
    }

    countMascotas() {
        return this._mascotas.length;
    }

    addBook(titulo, nombreAutor) {
        this._libros.push({nombre: titulo, autor: nombreAutor})
    }

    getBookNames() {
        return this._libros.map( (libro) => libro.nombre)
    }

}

const libros = [
     {
        nombre: "Cometierra",
        autor: "Dolores Reyes"
     },
     {
        nombre: "Las Malas",
        autor: "Camila Sosa Villada"
     }
]

const personNew = new DatosU("Sofia", "Gonzalez", libros, ["Gato", "Perro", "hamsteres"]);

console.log(personNew.getFullName());
console.log(personNew.getBookNames());
personNew.addBook("CAOS Nadie puede decirte quien sos", "Magalí Tajes")
console.log(personNew.getFullName());
console.log(personNew.countMascotas());
personNew.addMascota("Caballo");
console.log(personNew.countMascotas());

