import "./TarjetaPedido.css";
import PropType from "prop-types";

// Componente que muestra la información de un pedido
function TarjetaPedido({ fecha, estado, valor, onVerDetalles }) {
  return (
    <div className="tarjeta-pedido">
      <div className="pedido-info">
        <p>
          <strong>Fecha:</strong> {fecha}
        </p>
        <p>
          <strong>Estado:</strong>
          {"  "}
          <span className={`estado ${estado.toLowerCase()}`}>{estado}</span>
        </p>
        <p>
          <strong>Valor:</strong> ${valor}
        </p>
      </div>
      <button className="btn-detalles" onClick={onVerDetalles}>
        Ver Detalles
      </button>
    </div>
  );
}

TarjetaPedido.propTypes = {
  fecha: PropType.string,
  estado: PropType.string,
  valor: PropType.string,
  onVerDetalles: PropType.func,
};

export default TarjetaPedido;
