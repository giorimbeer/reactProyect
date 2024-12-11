import "./Productos.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "../../componentes/Header/Header.jsx";
import ListaCategorias from "../../componentes/Categorias/ListaCategorias.jsx";
import ListaProductos from "../../componentes/ListaProductos/ListaProductos.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Productos />
  </StrictMode>
);

/* componenete principal del apartado de productos
   el cual contiene otros componenetes
   como compuestos como el header*/
function Productos() {
  return (
    <>
      <Header />
      <main>
        <ListaCategorias />
        <ListaProductos />
      </main>
    </>
  );
}

export default Productos;
