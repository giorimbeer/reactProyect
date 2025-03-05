import PropTypes from "prop-types";
import { useState } from "react";

import "./TarjetaProducto.css";

/* componente que se encarga de mostrar el producto,
ya sea informacion basica o con detalles */
function TarjetaProducto(props) {
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  function manejarClick() {
    setMostrarDetalles(!mostrarDetalles);
  }

  if (!mostrarDetalles) {
    /* renderiza la informacion basica del producto */
    return (
      <div onClick={() => manejarClick()} className="producto">
        <div className="contenedor-img">
          <img
            className="producto-img"
            src={props.img}
            alt="imgagen del Producto"
          />
        </div>
        <div className="producto-info">
          <p className="producto-nombre">{props.nombre}</p>
          <p className="producto-precio">{props.precio}</p>
        </div>
      </div>
    );
  } else {
    /* renderiza la informacion del producto de una forma mas detallada */
    return (
      <div className="fondo">
        <div className="salir" onClick={() => manejarClick()}></div>
        <div className="producto-detalles">
          <button className="btn-cerrar" onClick={() => manejarClick()}>
            x
          </button>
          <img src={props.img} alt="imagen del producto" />
          <div className="detalles-texto">
            <h1>{props.nombre}</h1>
            <p>{props.descripcion}</p>
            <div className="comprar">
              <p>
                <b>Precio</b> {props.precio}
              </p>
              <button>comprar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TarjetaProducto.propTypes = {
  nombre: PropTypes.string,
  precio: PropTypes.number,
  img: PropTypes.string,
  descripcion: PropTypes.string,
};

export default TarjetaProducto;
