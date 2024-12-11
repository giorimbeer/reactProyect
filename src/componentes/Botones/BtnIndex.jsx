import PropTypes from "prop-types";

import "./BtnIndex.css";

/* botones que se muestran al inicio */
function BtnIndex(props) {
  return (
    <a href={props.direccion} className="button">
      {props.nombre}
    </a>
  );
}

BtnIndex.propTypes = {
  direccion: PropTypes.string,
  nombre: PropTypes.string,
};

BtnIndex.defaultProps = {
  direccion: "#",
  nombre: "nombre",
};

export default BtnIndex;
