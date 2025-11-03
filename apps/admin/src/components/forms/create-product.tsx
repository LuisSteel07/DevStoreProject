"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product, TProduct } from "@repo/types/dist/types/product";

export default function CreateProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TProduct>({ resolver: zodResolver(Product) });

  const onSubmit = async (data: TProduct) => {
    console.log("perro")
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

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-4 mt-8 w-[480px] bg-purple-200 rounded-2xl"
    >
      <label htmlFor="name">Name</label>
      <input
        type="text"
        {...register("name", { required: true })}
        className="bg-purple-400 p-2 rounded-2xl"
      />
      {errors.name && (
        <span className="text-red-500 text-base">{errors.name.message}</span>
      )}
      <label htmlFor="description">Description</label>
      <input
        type="text"
        {...register("description", { required: true })}
        className="bg-purple-400 p-2 rounded-2xl"
      />
      {errors.description && (
        <span className="text-red-500 text-base">
          {errors.description.message}
        </span>
      )}
      <label htmlFor="amount">Amount</label>
      <input
        {...register("amount", { required: true, valueAsNumber: true })}
        className="bg-purple-400 p-2 rounded-2xl"
      />
      {errors.amount && (
        <span className="text-red-500 text-base">{errors.amount.message}</span>
      )}
      <label htmlFor="price">Price</label>
      <input
        {...register("price", { required: true, valueAsNumber: true })}
        className="bg-purple-400 p-2 rounded-2xl"
      />
      {errors.price && (
        <span className="text-red-500 text-base">{errors.price.message}</span>
      )}
      <label htmlFor="photo">Photo</label>
      <input
        type="text"
        {...register("photo", { required: true })}
        className="bg-purple-400 p-2 rounded-2xl"
      />
      {errors.photo && (
        <span className="text-red-500 text-base">{errors.photo.message}</span>
      )}
      <button type="submit" className="bg-purple-400 mt-4 ">
        Crear
      </button>
    </form>
  );
}
