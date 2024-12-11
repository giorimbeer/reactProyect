import "./ListaProductos.css";
import TarjetaProducto from "../Tarjetas/TarjetaProducto.jsx";

/* componenete que se encarga de mostrar los productos de forma organizada*/
function ListaProductos() {
  return (
    <div className="lista-productos">
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/7750/7750473.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/12417/12417216.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/12999/12999731.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/7295/7295321.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/5684/5684022.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/9496/9496777.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/7750/7750473.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/12417/12417216.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/12999/12999731.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/7295/7295321.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/5684/5684022.png"
        nombre="mesa"
        precio="$123456"
      />
      <TarjetaProducto
        img="https://cdn-icons-png.flaticon.com/256/9496/9496777.png"
        nombre="mesa"
        precio="$123456"
      />
    </div>
  );
}

export default ListaProductos;
