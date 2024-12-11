import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Informacion.css";
import Header from "../../componentes/Header/Header.jsx";
import TarjetaInfo from "../../componentes/Tarjetas/TarjetaInfo.jsx";
import TarjetaContacto from "../../componentes/Tarjetas/TarjetaContacto.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Informacion />
  </StrictMode>
);

/* componenete principal del apartado de informacion
   el cual contiene otros componenetes
   como compuestos como el header y renderiza cosas basicas*/
function Informacion() {
  return (
    <>
      <Header />
      <main>
        <div className="contenedor-tarjetas-info">
          <TarjetaInfo
            titulo="VISION"
            texto="Ser reconocidos como una empresa líder en el mercado local, destacándonos por la calidad de nuestros productos y servicios, ademas convertirnos en la primera opción para nuestros clientes gracias a nuestra innovación, compromiso y excelencia"
          />

          <TarjetaInfo
            titulo="MISION"
            texto="Proveer productos y servicios de alta calidad que satisfagan las necesidades y expectativas de nuestros clientes, operando con profesionalismo, atención personalizada y un enfoque en la mejora continua para construir relaciones duraderas y de confianza"
          />

          <div className="contenedor-ubicacion">
            <TarjetaInfo
              titulo="UBICACION"
              texto="Avenida Imaginaria #000, Edificio Fantasía, Piso 99, Barrio Inventado, Bogotá, Colombia, CP 123456"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/717/717498.png"
              alt="imagen mapa"
            />
          </div>
        </div>
        <TarjetaContacto />
      </main>
    </>
  );
}
