import "./TarjetaContacto.css";

/*Una Tarjeta que muestra la informacion de contacto basica*/
function TarjetaContacto() {
  return (
    <div className="info-contacto-servicio">
      <h2>Formas de contactarno</h2>
      <p>
        <b>Correo:</b> algo@gmail.com
      </p>
      <p>
        <b>Telefono:</b> 123456123
      </p>
      <p>
        <b>Wassap:</b> 123456789
      </p>
    </div>
  );
}

export default TarjetaContacto;
