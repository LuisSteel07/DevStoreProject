export const DeleteProduct = async (id: number) => {
  try {
    const res = await fetch("http://localhost:3001/product/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id }),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error);

    console.log("Producto creado:", result.delete);
  } catch (err) {
    console.error("Error al eliminar producto:", err);
  }
};
