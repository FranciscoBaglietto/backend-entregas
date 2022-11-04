// //Entrega 1 = Clases

// class Usuario {
//   constructor(nombre, apellido) {
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.libros = [];
//     this.mascotas = [];
//   }

//   getFullName() {
//     return `Nombre: ${this.nombre} Apellido: ${this.apellido}`;
//   }

//   addMascotas(nombreMascota) {
//     this.mascotas.push(nombreMascota);
//   }

//   countMascotas() {
//     return this.mascotas.length;
//   }

//   addBook(nombre, autor) {
//     this.libros.push({ nombre, autor });
//   }

//   getBookNames() {
//     return this.libros.map((libro) => libro.nombre);
//   }
// }

// const objeto1 = new Usuario("Francisco", "Baglietto");

// console.log(objeto1.getFullName());

// objeto1.addMascotas("Perro");
// objeto1.addMascotas("Gato");
// console.log(objeto1.countMascotas());

// objeto1.addBook("Harry Potter", "Rowling");
// objeto1.addBook("El Principito", "Antonie");

// console.log(objeto1.getBookNames());

// Entrega 2 = Manejo de Arquivos

const fs = require("fs");

class Contenedor {
  constructor(nombre) {
    this.nombre = nombre;
  }

  save() {}

  getById(id) {}

  getAll() {}

  deleteById(id) {}

  deleteAll() {}
}


