import PropTypes from "prop-types";

import "./Apartado.css";

/* este componenete se encarga de renderizar los links del header */
function Apartado(props) {
  return (
    <li>
      <a href={props.direccion}>
        <img src={props.icono} alt={"icono" + props.nombre} />
        {props.nombre}
      </a>
    </li>
  );
}

// Apartado.defaultProps = {
//   nombre: "nombre",
//   direccion: "#",
//   icono: "src/assets/logoEmpresa.png",
// };

Apartado.propTypes = {
  nombre: PropTypes.string,
  direccion: PropTypes.string,
  icono: PropTypes.string,
};

export default Apartado;
