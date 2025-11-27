import { TProduct } from "@repo/types/dist/types/product";

export const GetsProducts = async (
  setProducts: (result: Array<TProduct>) => void
) => {
  try {
    const res = await fetch("http://localhost:3001/product/get");

    const result = await res.json();
    if (!res.ok) throw new Error(result.error);
    setProducts(result);
  } catch (err) {
    console.error("Error al crear producto:", err);
  }
};
