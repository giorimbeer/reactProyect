// Maneja los las peticiones a la API para manejar los datos de los productos

// Crea un nuevo producto
export async function crearProducto(data) {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (!response.ok) throw new Error(`Error: ${res.message}`);

    alert("Formulario enviado con éxito");
  } catch (error) {
    alert("Error al enviar el formulario, revisar que el nombre no exista");
    console.error(error);
  }
}

// Edita un producto por su id
export async function editarProducto(id, data) {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const res = await response.json();

    if (!response.ok) throw new Error(`Error: ${res.message}`);

    alert("Actualizacion con éxito");
  } catch (error) {
    alert("Error al actulizar la informacion, revisar que el nombre no exista");
    console.error(error);
  }
}

// Elimina un producto por su nombre
export async function eliminarProducto(nombre) {
  try {
    const response = await fetch(
      `http://localhost:3000/products/delete/${nombre}`,
      {
        method: "DELETE",
      }
    );

    const res = await response.json();

    if (!response.ok) throw new Error(`Error: ${res.message}`);

    alert("Eliminación con éxito");
  } catch (error) {
    alert("Eliminación fallida, revisa que el producto exista");
    console.error(error);
  }
}
