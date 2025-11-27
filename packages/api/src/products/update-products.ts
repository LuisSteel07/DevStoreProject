import { TProduct } from "@repo/types/dist/types/product";

export const UpdateProduct = async (data: TProduct) => {
  try {
    const res = await fetch("http://localhost:3001/product/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: data.id, ...data }),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error);

    console.log("Producto actualizado:", result.product);
    window.location.href = "/";
  } catch (err) {
    console.error("Error al actualizar producto:", err);
  }
};
