import { HistorialPedidos } from "../HistorialPedidos/HIstorialPedidos";
import { InfoCuenta } from "./InfoCuenta/InfoCuenta.jsx";
import { useState } from "react";
import PropsTypes from "prop-types";
import "./CuentaIniciada.css";

// Componente que muestra la información de la cuenta del usuario
function CuentaIniciada({ onCuentaIniciada }) {
  const [mostrarHistorial, setMostrarHistorial] = useState(true);

  // Maneja el cierre de sesión
  const manejoCerrarSesion = () => {
    onCuentaIniciada(false);
  };

  return (
    <div className="contenedor-cuenta-iniciada">
      <div className="contenedor-btns">
        <button
          className="btn-historial"
          onClick={() => setMostrarHistorial(true)}
        >
          Historial de Compra
        </button>
        <button
          className="btn-editar-perfil"
          onClick={() => setMostrarHistorial(false)}
        >
          Editar Perfil
        </button>
        <button className="btn-cerrar-sesion" onClick={manejoCerrarSesion}>
          Cerrar Sesión
        </button>
      </div>

      <div className="contenedor-info">
        {mostrarHistorial ? <HistorialPedidos /> : <InfoCuenta />}
      </div>
    </div>
  );
}

CuentaIniciada.propTypes = {
  onCuentaIniciada: PropsTypes.func,
};

export default CuentaIniciada;
