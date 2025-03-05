import PropTypes from "prop-types";

import "./TarjetaServicio.css";

/* tarjeta para mostrar un servicio de la empresa */
function TarjetaServicio(props) {
  return (
    <div className="servicio">
      <div className="servicio-img">
        <img src={props.img} alt={"imagen" + props.nombre} />
      </div>

      <div className="servicio-info">
        <h2>{props.nombre}</h2>
        <p>{props.descripcion}</p>
      </div>
    </div>
  );
}

TarjetaServicio.propTypes = {
  img: PropTypes.string,
  descripcion: PropTypes.string,
  nombre: PropTypes.string,
};

TarjetaServicio.defaultProps = {
  img: "https://cdn-icons-png.flaticon.com/256/15337/15337284.png",
  descripcion:
    "detalles del servicio: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eum velit quibusdam vero autem necessitatibus voluptate harum commodi! Suscipit eveniet voluptas quia expedita ullam ex voluptatem mollitia odit atque assumenda?",
  nombre: "Nombre del servicio",
};

export default TarjetaServicio;
