import { TProduct } from "@repo/types/dist/types/product";

export const CreateProduct = async (data: TProduct) => {
  try {
    const res = await fetch("http://localhost:3001/product/insert", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error);

    console.log("Producto creado:", result.product);
  } catch (err) {
    console.error("Error al crear producto:", err);
  }
};