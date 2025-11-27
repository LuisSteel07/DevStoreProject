import { TProduct } from "@repo/types/dist/types/product";

export const GetSpecificProduct = async (
  setProduct: (result: TProduct) => void,
  id: number
) => {
  try {
    const res = await fetch("http://localhost:3001/product/specific", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({id}),
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error);
    setProduct(result);
  } catch (err) {
    console.error("Error al crear producto:", err);
  }
};
