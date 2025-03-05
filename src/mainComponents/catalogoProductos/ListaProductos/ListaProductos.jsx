import "./ListaProductos.css";
import TarjetaProducto from "./TarjetaProducto/TarjetaProducto.jsx";
import useFetch from "../useFetch.js";
import PropTypes from "prop-types";

// Componente que muestra la lista de productos
function ListaProductos({ categoria }) {
  // comprueva si la categoria es general o no para hacer la peticion a la api
  const url =
    categoria !== "general"
      ? `http://localhost:3000/products?category=${categoria}`
      : "http://localhost:3000/products";

  // obtiene los productos de la api
  let { data, loading, error } = useFetch(url);
  let productos = data;

  //datos de la api
  return (
    <div className="lista-productos">
      {loading && <p>Cargando...</p>}
      {error && <h2>Ocurrio un error al cargar los productos </h2>}
      {!loading &&
        productos?.map((producto) => (
          <TarjetaProducto
            key={producto.id}
            img={"data:image/png;base64," + producto.image}
            nombre={producto.name}
            precio={producto.price}
            descripcion={producto.description}
          />
        ))}
    </div>
  );

  //datos locales de prueva
  // return (
  //   <div className="lista-productos">
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/7750/7750473.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/12417/12417216.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/12999/12999731.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/7295/7295321.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/5684/5684022.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/9496/9496777.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/7750/7750473.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/12417/12417216.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/12999/12999731.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/7295/7295321.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/5684/5684022.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //     <TarjetaProducto
  //       img="https://cdn-icons-png.flaticon.com/256/9496/9496777.png"
  //       nombre="mesa"
  //       precio="$123456"
  //     />
  //   </div>
  // );
}

ListaProductos.propTypes = {
  categoria: PropTypes.string,
};

export default ListaProductos;
