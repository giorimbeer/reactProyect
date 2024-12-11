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
        <img
          className="producto-img"
          src={props.img}
          alt="imgagen del Producto"
        />
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
  precio: PropTypes.string,
  img: PropTypes.string,
  descripcion: PropTypes.string,
};

TarjetaProducto.defaultProps = {
  nombre: "producto",
  precio: "$9999999",
  img: "https://cdn-icons-png.flaticon.com/256/14477/14477431.png",
  descripcion:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque exercitationem corrupti soluta sequi dolore possimus sed accusamus placeat consequuntur, a modi obcaecati amet commodi excepturi rerum dicta, eveniet natus quae?",
};

export default TarjetaProducto;
