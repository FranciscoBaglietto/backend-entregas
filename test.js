const Contenedor = require("./index.js");

//datos de prueba

const item1 = {
  title: "Telefono",
  precio: 100000,
  id: 1,
};

const item2 = {
  title: "Computadora",
  precio: 100000,
  id: 2,
};

const item3 = {
  title: "Teclado",
  precio: 100000,
  id: 3,
};

async function main() {
  const contenedor = new Contenedor("./productos.txt");

  let datos = await contenedor.getAll();
  console.log(datos);

  let id1 = await contenedor.save(item1);
  console.log(id1);

  let busca1 = await contenedor.getById(1);
  console.log(busca1);

  await contenedor.deteleById(1);
  let detele1 = await contenedor.getAll();
  console.log(detele1);

  await contenedor.deleteAll();
  let borradoTodo = await contenedor.getAll();
  console.log(borradoTodo);
}

main();
