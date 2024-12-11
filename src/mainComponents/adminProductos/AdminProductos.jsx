import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";

import "./AdminProductos.css";
import Header from "../../componentes/Header/Header.jsx";
import Formulario from "../../componentes/AdminProducts/Formulario.jsx";

/* renderiza los componenetes en el html */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AdminProductos />
  </StrictMode>
);

/* componenete principal del apartado de administracion de los productos
    el cual contiene logica para cambiar los formularios y otros componenetes
    como compuestos como el header */
function AdminProductos() {
  const [modo, setmodo] = useState("crear");

  let titulo, mostrarBtnBuscar, imgTitulo, btnValue, formEliminar;

  /* asignacion de nuevos valores al componenente de formulario */
  if (modo === "crear") {
    titulo = "Crear Producto";
    btnValue = "Crear";
    mostrarBtnBuscar = false;
    imgTitulo = "Añadir Imagen";
  } else if (modo === "editar") {
    titulo = "Editar Producto";
    btnValue = "Editar";
    mostrarBtnBuscar = true;
    imgTitulo = "Cambiar Imagen";
  } else {
    formEliminar = true;
  }

  function manejarCambio(m) {
    setmodo(m);
  }

  return (
    <>
      <Header />
      <main>
        {/*componenete para renderizar los botones de cambio de formulario */}
        <div className="button-container">
          <button onClick={() => manejarCambio("editar")} className="edit">
            Editar
          </button>
          <button onClick={() => manejarCambio("eliminar")} className="delete">
            Eliminar
          </button>
          <button onClick={() => manejarCambio("crear")} className="create">
            Crear
          </button>
        </div>
        <Formulario
          imgTitulo={imgTitulo}
          titulo={titulo}
          btnValue={btnValue}
          mostrarBtnBuscar={mostrarBtnBuscar}
          formEliminar={formEliminar}
        />
      </main>
    </>
  );
}
