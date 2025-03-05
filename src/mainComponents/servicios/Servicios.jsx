import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Header from "../../componentes/Header/Header";
import Servicio from "./TarjetaServicio/TarjetaServicio";
import TarjetaContacto from "../../componentes/Tarjetas/TarjetaContacto";
import "./Servicios.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Servicios />
  </StrictMode>
);

/* componenete principal del apartado de servicios
   el cual contiene otros componenetes
   compuestos como el header*/
function Servicios() {
  return (
    <>
      <Header />
      <TarjetaContacto />
      <main>
        <Servicio
          img="https://cdn-icons-png.flaticon.com/256/5683/5683972.png"
          nombre="Diseño y Fabricacion"
          descripcion="Se ofrecen diseños únicos y exclusivos que se adaptan a las necesidades y gustos del cliente. Desde cocinas integrales modernas hasta comedores, salas, armarios, puertas y ventanas personalizadas, cada pieza combina funcionalidad y estilo. Trabajando con materiales de alta calidad y acabados impecables para garantizar muebles duraderos y con gran atractivo estético."
        />
        <Servicio
          img="https://cdn-icons-png.flaticon.com/256/5684/5684049.png"
          nombre="Instalación y Montaje"
          descripcion="Se brinda un servicio profesional de instalación y montaje, asegurando resultados precisos y de alta calidad. Ya sea en el montaje de muebles, instalación de pisos de madera, puertas, ventanas o revestimientos, cada detalle se ejecuta con precisión, garantizando que todo quede perfectamente ajustado y listo para su uso."
        />
        <Servicio
          img="https://cdn-icons-png.flaticon.com/256/5684/5684108.png  "
          nombre="Reparación y Restauración"
          descripcion="Nos encargamos de devolver la vida a muebles dañados o desgastados, restaurándolos con dedicación y detalle. También realizamos ajustes y refuerzos en estructuras de madera, ofreciendo soluciones que mejoran tanto la funcionalidad como la apariencia de las piezas."
        />
      </main>
    </>
  );
}

export default Servicios;
