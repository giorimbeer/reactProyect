// Maneja las peticiónes a la API para manejar los datos de los usuarios

// Añade un nuevo usuario a la base de datos
export async function crearCuenta(data) {
  try {
    const response = await fetch(`http://localhost:3000/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorRes = await response.json();
      throw new Error(errorRes.error || "Error al crear la cuenta");
    }

    const res = await response.json();

    return res;
  } catch (error) {
    console.error("Error en la función crearCuenta:", error);
    return null;
  }
}

// Inicia sesión de un usuario
export async function ingresar(data) {
  try {
    const response = await fetch(`http://localhost:3000/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorRes = await response.json();
      throw new Error(errorRes.message || "Error al iniciar sesión");
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error en la función ingresar:", error);
    return null;
  }
}

// Edita la información de un usuario por su id
export async function editarCuenta(id, data) {
  try {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorRes = await response.json();
      throw new Error(errorRes.message || "Error al editar");
    }

    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Error en la función editarCuenta:", error);
    return null;
  }
}
