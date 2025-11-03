"use client";
import { TProduct } from "@repo/types/dist/types/product";
import { useEffect, useState } from "react";
import ProductComponent from "./product";
import { GetsProducts } from "@/src/lib/api/gets-products";

export default function ProductList() {
  const [products, setProducts] = useState<Array<TProduct>>();

  useEffect(() => {
    GetsProducts(setProducts);
  }, []);

  if (!products) {
    return <h1 className="mt-16 font-bold text-2xl text-purple-700">Loading Products...</h1>;
  }

  return (
    <section className="flex flex-row flex-wrap gap-4 mt-8">
      {products.map((product) => {
        return <ProductComponent product={product} key={product.id} />;
      })}
    </section>
  );
}
