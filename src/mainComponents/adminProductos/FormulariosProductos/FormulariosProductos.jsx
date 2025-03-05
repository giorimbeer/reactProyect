import PropTypes from "prop-types";
import "./FormulariosProductos.css";
import { useRef, useState } from "react";
import {
  crearProducto,
  editarProducto,
  eliminarProducto,
} from "./manejarDatosProducto.js";

function Formulario({
  btnValue,
  imgTitulo,
  titulo,
  mostrarBtnBuscar,
  formEliminar,
}) {
  // Referencia para el input oculto de imágenes
  const imagenInput = useRef(null);
  // Estado para manejar el indicador de carga al buscar productos
  const [cargando, setCargando] = useState(false);
  // Estado para la imagen que se muestra en la vista previa
  const [imagen, setImagen] = useState(
    "https://cdn-icons-png.flaticon.com/128/8344/8344913.png"
  );
  // Estado para almacenar el ID del producto
  const [id, setId] = useState();

  // Función que limpia los campos del formulario y restaura la imagen por defecto
  const limpiarCampos = () => {
    document.querySelector("input[name=nombre]").value = "";
    document.querySelector("input[name=precio]").value = "";
    document.querySelector("input[name=categoria]").value = "";
    document.querySelector("textarea[name=descripcion]").value = "";
    setImagen("https://cdn-icons-png.flaticon.com/128/8344/8344913.png");
  };

  // Simula el clic en el input de tipo archivo para seleccionar una imagen
  const subirImagen = () => imagenInput.current.click();

  // Maneja el evento al seleccionar un archivo de imagen
  const manejarImagen = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = () => setImagen(reader.result);
      reader.readAsDataURL(file);
    } else {
      alert("Por favor, selecciona solo archivos de imagen");
    }
  };

  // Procesa el envío del formulario, diferenciando entre crear, editar o eliminar producto
  const manejarEnvio = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const producto = Object.fromEntries(formData);
    console.log(producto);

    if (btnValue === "Editar" || btnValue === "Crear") {
      // Prepara el objeto con los datos del producto que requiere la api
      const data = {
        name: producto.nombre,
        image: imagen?.split(",")[1],
        price: parseFloat(producto?.precio),
        category: producto?.categoria,
        description: producto?.descripcion,
      };

      if (btnValue === "Editar") {
        editarProducto(id, data);
        limpiarCampos();
      }
      if (btnValue === "Crear") {
        crearProducto(data);
        limpiarCampos();
      }
    }
    // Si la acción es eliminar, se utiliza solo el nombre del producto
    if (btnValue === "Eliminar") {
      console.log(producto.nombre);
      eliminarProducto(producto.nombre);
    }
  };

  // Busca un producto según el nombre ingresado y completa el formulario con sus datos
  function BuscarProducto() {
    const nombre = document.querySelector("input[name=nombre]").value;
    setCargando(true);

    // Realiza la petición al servidor para obtener el producto
    fetch(`http://localhost:3000/products/search?name=${nombre}`)
      .then((res) => res.json())
      .then((data) => {
        // Completa los campos del formulario con la información obtenida
        document.querySelector("input[name=precio]").value = data.price;
        document.querySelector("input[name=categoria]").value = data.category;
        document.querySelector("textarea[name=descripcion]").value =
          data.description;
        // Actualiza la vista previa de la imagen utilizando el string en base64 recibido
        setImagen("data:image/png;base64," + data.image);
        // Guarda el ID del producto para futuras operaciones
        setId(data.id);
      })
      .catch((err) => {
        console.error(err);
        alert("Producto no encontrado");
      })
      .finally(() => setCargando(false));
  }

  return (
    <form id="producto-form" onSubmit={manejarEnvio}>
      {formEliminar ? (
        // Renderiza la versión del formulario para eliminar un producto
        <div className="text-campos">
          <h1>Eliminar Producto</h1>
          <label>Nombre:</label>
          <input type="text" name="nombre" required />
          <input type="submit" value={btnValue} className="btn" />
        </div>
      ) : (
        // Renderiza el formulario para crear o editar un producto
        <>
          <div className="subir-img">
            <h2>{imgTitulo}</h2>
            {/* Al hacer clic se activa el input oculto para seleccionar imagen */}
            <span onClick={subirImagen} className="btn">
              Buscar en tu equipo
            </span>
            <input
              ref={imagenInput}
              onChange={manejarImagen}
              type="file"
              name="imagen"
              accept="image/*"
              style={{ display: "none" }}
            />
            <div className="preview">
              <img className="preview-img" src={imagen} alt="Vista previa" />
            </div>
          </div>

          <div className="text-campos">
            <h1>{titulo}</h1>
            <label>Nombre:</label>
            <input type="text" name="nombre" required />
            {mostrarBtnBuscar && (
              // Botón que activa la búsqueda del producto, solo si se requiere mostrarlo
              <button onClick={BuscarProducto} className="btn" type="button">
                {cargando ? "Cargando..." : "Buscar"}
              </button>
            )}
            <label>Precio:</label>
            <input type="number" name="precio" required min="10000" />
            <label>Descripción:</label>
            <textarea name="descripcion" rows="4" cols="50" required></textarea>
            <label>Categoría:</label>
            <input type="text" name="categoria" required />
            <input type="submit" value={btnValue} className="btn" />
          </div>
        </>
      )}
    </form>
  );
}

Formulario.propTypes = {
  btnValue: PropTypes.string,
  imgTitulo: PropTypes.string,
  titulo: PropTypes.string,
  mostrarBtnBuscar: PropTypes.bool,
  formEliminar: PropTypes.bool,
};

export default Formulario;
