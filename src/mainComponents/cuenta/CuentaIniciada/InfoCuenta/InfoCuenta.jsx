import "./InfoCuenta.css";
import PropsTypes from "prop-types";
import { editarCuenta } from "../../FormularioCuenta/manejoDatosUsuario";

// Componente que muestra el formulario para editar la información de la cuenta del usuario
export function InfoCuenta() {
  // Función que actualiza la información de la cuenta del usuario
  const actualizarCuenta = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const usuario = Object.fromEntries(formData);

    console.log(usuario);

    const data = {
      email: usuario.email,
      password: usuario.contraseña,
      name: usuario?.nombre,
      phone: usuario?.telefono,
      address: usuario?.direccion,
    };

    editarCuenta(data);
  };

  return (
    <form className="formulario" onSubmit={actualizarCuenta}>
      <h1 className="titulo">Usuario Nombre</h1>

      <label className="label">Nombre:</label>
      <input className="input" name="nombre" type="text" />

      <label className="label">Correo:</label>
      <input className="input" name="email" type="email" />

      <label className="label">Teléfono:</label>
      <input className="input" name="telefono" type="number" />

      <label className="label">Dirección:</label>
      <input className="input" name="direccion" type="text" />

      <label className="label">Contraseña:</label>
      <input className="input" name="contraseña" type="password" />

      <input className="boton" type="submit" value="Editar" />
    </form>
  );
}

InfoCuenta.propTypes = {
  titulo: PropsTypes.string,
  crearCuenta: PropsTypes.bool,
  btnValue: PropsTypes.string,
};
