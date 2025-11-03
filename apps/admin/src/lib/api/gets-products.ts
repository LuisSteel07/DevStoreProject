import { TCompProduct } from "@/src/types/TCompProduct";

export const GetsProducts = async (
  setProducts: (result: Array<TCompProduct>) => void
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
