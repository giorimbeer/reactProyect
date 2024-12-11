import "./FormularioCuenta.css";
import PropsTypes from "prop-types";

/* formulario para iniciar o crear una cuenta */
function FormularioCuenta(props) {
  return (
    <form>
      <h1>{props.titulo}</h1>

      <label>Correo:</label>
      <input type="email" placeholder="Enter your email" />

      <label>Contraseña:</label>
      <input type="password" placeholder="ingresar contraseña" />

      {/*verifica el valor de la variable crearCuenta para mostrar o no campos */}
      {props.crearCuenta ? (
        <div>
          <label>Verificar Contraseña:</label>
          <input type="password" placeholder="verificar contraseña" />
        </div>
      ) : (
        ""
      )}

      <input type="submit" value={props.btnValue} />
    </form>
  );
}

FormularioCuenta.propTypes = {
  titulo: PropsTypes.string,
  crearCuenta: PropsTypes.bool,
  btnValue: PropsTypes.string,
};

export default FormularioCuenta;
