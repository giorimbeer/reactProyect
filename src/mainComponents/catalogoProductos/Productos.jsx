import "./Productos.css";
import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "../../componentes/Header/Header.jsx";
import ListaCategorias from "./Categorias/ListaCategorias.jsx";
import ListaProductos from "./ListaProductos/ListaProductos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Productos />
  </StrictMode>
);

/* componenete principal del apartado de productos
   el cual contiene otros componenetes
   como compuestos como el header*/
function Productos() {
  const [categoria, setCategoria] = useState("general");

  return (
    <>
      <Header />
      <main>
        <ListaCategorias setCategoria={setCategoria} />
        <ListaProductos categoria={categoria} />
      </main>
    </>
  );
}

export default Productos;
