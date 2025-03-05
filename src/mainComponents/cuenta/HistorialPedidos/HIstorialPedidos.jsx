import TarjetaPedido from "./TarjetaPedido/TarjetaPedido";
import "./HistorialPedidos.css";

// Componente que muestra el historial de pedidos del usuario
export function HistorialPedidos() {
  // Función para ver los detalles de un pedido
  const handleVerDetalles = () => {
    alert("Mostrando detalles del pedido...");
  };

  return (
    <div className="historial-pedidos">
      <h1>Historial</h1>
      <TarjetaPedido
        fecha="2024-02-07"
        estado="Pendiente"
        valor="25000"
        onVerDetalles={handleVerDetalles}
      />
      <TarjetaPedido
        fecha="2024-02-06"
        estado="Entregado"
        valor="18000"
        onVerDetalles={handleVerDetalles}
      />
      <TarjetaPedido
        fecha="2024-02-05"
        estado="Cancelado"
        valor="32000"
        onVerDetalles={handleVerDetalles}
      />
    </div>
  );
}
