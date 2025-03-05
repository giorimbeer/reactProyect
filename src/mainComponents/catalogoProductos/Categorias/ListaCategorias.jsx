import "./ListaCategorias.css";
import useFetch from "../useFetch.js";
import PropTypes from "prop-types";

// Componente que muestra la lista de categorías de productos
function ListaCategorias({ setCategoria }) {
  // Obtener las categorías de productos de la base de datos
  const { data, loading, error } = useFetch(
    "http://localhost:3000/products/categories"
  );

  if (loading) return <p>Cargando...</p>;
  if (error) return <h2>Ocurrió un error al cargar las categorias</h2>;

  // Asegurar que `data` contiene valores y mapear correctamente
  const categorias = data?.map((categoria) => categoria.categoria) || [];

  // Maneja el cambio de categoría
  const manejarCambio = (event) => {
    setCategoria(event.target.value);
  };

  return (
    <div className="categorias">
      <h2>Categorías</h2>
      <ul id="lista-categorias">
        <li key="general">
          <input
            type="radio"
            name="categorias"
            onChange={manejarCambio}
            value="general"
          />
          general
        </li>
        {categorias.map((categoria) => (
          <li key={categoria}>
            <input
              type="radio"
              name="categorias"
              onChange={manejarCambio}
              value={categoria}
            />
            {categoria}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListaCategorias.propTypes = {
  setCategoria: PropTypes.func,
};

export default ListaCategorias;
