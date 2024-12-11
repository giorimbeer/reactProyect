import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "../../componentes/Header/Header.jsx";
import BtnIndex from "../../componentes/Botones/BtnIndex.jsx";

/* renderiza los componenetes en el html */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index />
  </StrictMode>
);

/* componenete principal del apartado de index o inicio
   el cual contiene otros componenetes
   como compuestos como el header y renderiza cosas basicas*/
function Index() {
  return (
    <>
      <Header />
      <main>
        <section className="welcome-section">
          <div className="main-logo">
            <img
              src="src/assets/ingenioHogarLogo.png"
              alt="Ingenio Hogar Main Logo"
            />
          </div>

          <h2>MUEBLES Y SERVICIOS PARA EL HOGAR</h2>
          <p>Bienvenido a nuestro sitio web</p>
          <p>
            Siéntete libre de explorar nuestro catálogo en productos y servicios
          </p>
          <div className="buttons">
            <BtnIndex nombre="PRODUCTOS" direccion="../../../productos.html" />
            <BtnIndex nombre="SERVICIOS" direccion="../../../servicios.html" />
            <BtnIndex
              nombre="INFORMACION"
              direccion="../../../informacion.html"
            />
          </div>
        </section>
      </main>
    </>
  );
}
