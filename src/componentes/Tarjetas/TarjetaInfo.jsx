import PropType from "prop-types";

import "./TarjetaInfo.css";
/* tarjeta para mostrar informacion de la empresa */
function TarjetaInfo(props) {
  return (
    <div className="tarjeta-info">
      <h2>{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  );
}

TarjetaInfo.propTypes = {
  titulo: PropType.string,
  texto: PropType.string,
};

export default TarjetaInfo;
