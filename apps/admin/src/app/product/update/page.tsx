"use client";
import UpdateProductForm from "@/src/components/forms/update-product";
import { GetSpecificProduct } from "@repo/api/dist/products";
import { TProduct } from "@repo/types/dist/types/product";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [product, setProduct] = useState<TProduct>();
  const searchParams = useSearchParams();

  const id = searchParams.get("id");

  useEffect(() => {
    GetSpecificProduct(setProduct, Number(id));
  }, [id]);

  if (!product) {
    return (
      <section className="flex items-center justify-center">
        <h1 className="text-2xl font-semibold text-purple-500">
          Loading Product
        </h1>
      </section>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center mt-8">
      <h1 className="text-2xl font-bold ">Create Product</h1>
      <UpdateProductForm product={product} />
    </div>
  );
}
