import { useRef } from "react";
import "./FormularioCuenta.css";
import PropsTypes from "prop-types";
import { ingresar, crearCuenta } from "./manejoDatosUsuario";

// Componente que muestra el formulario para crear o ingresar a una cuenta
function FormularioCuenta(props) {
  const btnEnvio = useRef(null);

  // Función que maneja el envío del formulario
  const manejarEnvio = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const usuario = Object.fromEntries(formData);

    // Prepara el objeto con los datos del usuario que requiere la api
    const data = {
      email: usuario.email,
      password: usuario.contraseña,
      name: usuario?.nombre,
      phone: usuario?.telefono,
      address: usuario?.direccion,
    };

    // Verifica si se está creando o ingresando a una cuenta

    // crea una cuenta
    if (btnEnvio.current.value === "Crear") {
      if (data.password !== usuario.verificarContraseña) {
        alert("contraseñas son diferentes");
        return;
      }

      crearCuenta(data).then((res) => {
        if (res) {
          alert("cuenta creada");
          props.onCuentaCreada(false);
        } else {
          console.log(res);
          alert("Error al crear la cuenta, revisar los datos");
        }
      });
    }

    // ingresar a una cuenta
    if (btnEnvio.current.value === "Ingresar") {
      ingresar(data).then((res) => {
        if (res) {
          console.log(res);
          props.onCuentaIniciada(true);
        } else {
          console.log(res);
          alert("Error al ingresar, revisar los datos");
        }
      });
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <h1>{props.titulo}</h1>
      <label>Correo:</label>
      <input name="email" type="email" placeholder="ingresar correo" />

      <label>Contraseña:</label>
      <input
        name="contraseña"
        type="password"
        placeholder="ingresar contraseña"
      />

      {/*verifica el valor de la variable crearCuenta para mostrar o no campos */}
      {props.crearCuenta ? (
        <>
          <label>Verificar Contraseña:</label>
          <input
            name="verificarContraseña"
            type="password"
            placeholder="verificar contraseña"
          />
          <label>Numero de Telefono:</label>
          <input
            name="telefono"
            type="number"
            placeholder="ingresar telefono"
          />
          <label>Direcciòn:</label>
          <input
            name="direccion"
            type="text"
            placeholder="ingresar direccion"
          />
          <label>Nombre:</label>
          <input name="nombre" type="text" placeholder="ingresar nombre" />
        </>
      ) : (
        ""
      )}

      <input ref={btnEnvio} type="submit" value={props.btnValue} />
    </form>
  );
}

FormularioCuenta.propTypes = {
  titulo: PropsTypes.string,
  crearCuenta: PropsTypes.bool,
  btnValue: PropsTypes.string,
  onCuentaIniciada: PropsTypes.func,
  onCuentaCreada: PropsTypes.func,
};

export default FormularioCuenta;
