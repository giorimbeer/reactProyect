import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import "./cuenta.css";
import Header from "../../componentes/Header/Header.jsx";
import FormularioCuenta from "../../componentes/cuenta/FormularioCuenta.jsx";

/* renderiza el codigo en el html */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cuenta />
  </StrictMode>
);

/* componenete principal del apartado de cuenta
   el cual contiene logica para cambiar los formularios y otros componenetes
   como compuestos como el header */

function Cuenta() {
  const [crearCuenta, setCrearCuenta] = useState(false);

  let titulo, btnValue, mensaje;

  /*cambia la informacion dependiendo del formulario */
  if (crearCuenta) {
    titulo = "Crear Cuenta";
    btnValue = "Crear";
    mensaje = "¿Ya Tienes Cuenta?";
  } else {
    titulo = "Iniciar Sesiòn";
    btnValue = "Ingresar";
    mensaje = "¿No Tienes Cuenta?";
  }

  function CambiarFormulario() {
    setCrearCuenta(!crearCuenta);
  }

  return (
    <>
      <Header />
      <main>
        <FormularioCuenta
          titulo={titulo}
          crearCuenta={crearCuenta}
          btnValue={btnValue}
        />
        {/*boton para cambiar formularios */}
        <button onClick={CambiarFormulario} type="button">
          {mensaje}
        </button>
      </main>
    </>
  );
}
