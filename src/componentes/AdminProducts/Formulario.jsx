import PropType from "prop-types";
import "./Formulario.css";

/* formulario para editar, eliminar o añadir un producto */
function Formulario(props) {
  return (
    <form id="producto-form">
      {props.formEliminar ? (
        <div className="text-campos">
          {/* formulario para eliminar productos */}
          <h1>Eliminar Producto</h1>
          <label>Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
          <input type="submit" value="Eliminar" className="btn"></input>
        </div>
      ) : (
        <>
          {/* formularios de editar y añadir producto */}
          <div className="subir-img">
            <h2>{props.imgTitulo}</h2>
            <span className="btn">Buscar en tu equipo</span>
            <input type="file" id="file-input" accept="image/*" />
            <div className="preview" id="preview"></div>
          </div>

          <div className="text-campos">
            <h1>{props.titulo}</h1>

            <label>Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            {/* verificacion de variable mostrarBtnBuscar para renderizar o no el boton */}
            {props.mostrarBtnBuscar ? (
              <button id="btnBuscar" className="btn" type="button">
                Buscar
              </button>
            ) : (
              ""
            )}

            <label>Precio:</label>
            <input type="number" id="precio" name="precio" required min="0" />

            <label>Descripción:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              rows="4"
              cols="50"
              required
            ></textarea>

            <label>Categoria:</label>
            <input type="text" id="categoria" name="categoria" required />

            <input type="submit" value={props.btnValue} className="btn"></input>
          </div>
        </>
      )}
    </form>
  );
}

Formulario.propTypes = {
  btnValue: PropType.string,
  imgTitulo: PropType.string,
  titulo: PropType.string,
  mostrarBtnBuscar: PropType.bool,
  formEliminar: PropType.bool,
};

export default Formulario;
