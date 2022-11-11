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

//        Entrega 2 = Manejo de Arquivos

const fs = require("fs");

class Contenedor {
  constructor(ruta) {
    this.ruta = ruta;
  }

  async save(obj) {
    //obtengo todos los objetos
    const listado = await this.getAll();

    if (listado.length > 0 && listado.some((el) => el.title === obj.title)) {
      console.log("El producto ya se encuentra en el catalogo");
      return;
    }

    //identificamos el ultimo id y lo incrementamos
    let nuevoId; //= {};

    if (listado.length == 0) {
      nuevoId = 1;
    }
    //SI HAY DATA [...] [1] => 0
    else {
      nuevoId = listado[listado.length - 1].id + 1;
    }

    //asignat el nuevo id a mi objeto
    const nuevoObjetoConID = { ...obj, id: nuevoId };

    //insertar mi obejto al listado
    listado.push(nuevoObjetoConID);

    try {
      const data = await fs.promises.writeFile(
        this.ruta,
        JSON.stringify(listado, null, 2)
      );
      return nuevoId;
    } catch (error) {
      throw new Error(`Error al guardar el nuevo objeto: ${error}`);
    }
  }

  //funcion para obtener objetos
  async getAll() {
    try {
      const data = await fs.promises.readFile(this.ruta, "utf-8");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  //obtener un objecto random del array
  async getRandom() {
    try {
      const data = await fs.promises.readFile(this.ruta, "utf8");
      const parseData = JSON.parse(data);
      return parseData[Math.floor(Math.random() * parseData.length)];
    } catch (error) {
      return [];
    }
  }

  async getById(id) {
    try {
      const listado = await this.getAll();
      return listado.find((item) => item.id === id);
    } catch (error) {
      throw new Error(`No se encuentra el dato con ese id: ${error}`);
    }
  }

  //eliminar objeto por ID

  async deteleById(id) {
    const listado = await this.getAll();
    const nuevoListado = listado.filter((item) => item.id != id) ?? null;
    try {
      await fs.promises.writeFile(
        this.ruta,
        JSON.stringify(nuevoListado, null, 2)
      );
    } catch (error) {
      throw new Error(`No se pudo borrar la data: ${error}`);
    }
  }

  //Para borrar todo
  async deleteAll() {
    try {
      await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2));
    } catch (error) {
      throw new Error(`No se encuentra el dato: ${error}`);
    }
  }
}

module.exports = Contenedor;
