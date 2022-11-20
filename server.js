import express, { json, urlencoded } from "express";
import routerProductos from "./routes/productos.route.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/static", express.static(__dirname + "/public"));
app.use("/api/productos", routerProductos);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`error al escuchar el puerto ${PORT}, error: ${err}`);
  } else {
    console.log(`escuchando puerto ${PORT}`);
  }
});
