import "./ListaCategorias.css";

/* renderiza la lista de categorias 
que contienen los diferentes productos */
function ListaCategorias() {
  return (
    <div className="categorias">
      <h2>Categorias</h2>
      <ul id="lista-categorias">
        <li>
          <input type="checkbox" />
          categoria 1
        </li>
        <li>
          <input type="checkbox" />
          categoria 2
        </li>
        <li>
          <input type="checkbox" />
          categoria 3
        </li>
        <li>
          <input type="checkbox" />
          categoria 4
        </li>
        <li>
          <input type="checkbox" />
          categoria 5
        </li>
      </ul>
    </div>
  );
}

export default ListaCategorias;
