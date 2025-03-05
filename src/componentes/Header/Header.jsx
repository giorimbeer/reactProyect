import "./Header.css";
import Apartado from "./Apartado/Apartado.jsx";

/* Es el header o encabezado de la aplicacion
que permite la navegacion por las diferentes partes de la misma */
function Header() {
  return (
    <header>
      <div className="logo">
        <img src="src/assets/logoEmpresa.png" alt="Ingenio Hogar Logo" />
        <div>INGENIO HOGAR</div>
      </div>
      <nav>
        <ul>
          <Apartado
            nombre="INICIO"
            direccion="../../../index.html"
            icono="https://cdn-icons-png.flaticon.com/128/3917/3917074.png"
          />
          <Apartado
            nombre="SERVICIOS"
            direccion="../../../servicios.html"
            icono="https://cdn-icons-png.flaticon.com/128/12442/12442284.png"
          />
          <Apartado
            nombre="PRODUCTOS"
            direccion="../../../productos.html"
            icono="https://cdn-icons-png.flaticon.com/128/3916/3916627.png"
          />
          <Apartado
            nombre="ADMINISTRAR"
            direccion="../../../adminProductos.html"
            icono="https://cdn-icons-png.flaticon.com/128/3914/3914208.png"
          />
          <Apartado
            nombre="INFORMACION"
            direccion="../../../informacion.html"
            icono="https://cdn-icons-png.flaticon.com/128/3916/3916714.png"
          />
          <Apartado
            nombre="CUENTA"
            direccion="../../../cuenta.html"
            icono="https://cdn-icons-png.flaticon.com/128/3917/3917581.png"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
