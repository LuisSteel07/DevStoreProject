"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Product, TProduct } from "@repo/types/dist/types/product";
import {  CreateProduct } from "@repo/api/dist/products";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function CreateProductForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TProduct>({ resolver: zodResolver(Product) });

  const onSubmit = async (data: TProduct) => {
    CreateProduct(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-4 mt-8 w-[480px] bg-purple-200 rounded-2xl"
    >
      <label htmlFor="name">Name</label>
      <Input
        type="text"
        {...register("name", { required: true })}
        className="bg-purple-400 p-2 mb-2"
      />
      {errors.name && (
        <span className="text-red-500 text-base">{errors.name.message}</span>
      )}
      <label htmlFor="description">Description</label>
      <Input
        type="text"
        {...register("description", { required: true })}
        className="bg-purple-400 p-2 mb-2"
      />
      {errors.description && (
        <span className="text-red-500 text-base">
          {errors.description.message}
        </span>
      )}
      <label htmlFor="amount">Amount</label>
      <Input
        {...register("amount", { required: true, valueAsNumber: true })}
        className="bg-purple-400 p-2 mb-2"
      />
      {errors.amount && (
        <span className="text-red-500 text-base">{errors.amount.message}</span>
      )}
      <label htmlFor="price">Price</label>
      <Input
        {...register("price", { required: true, valueAsNumber: true })}
        className="bg-purple-400 p-2 mb-2"
      />
      {errors.price && (
        <span className="text-red-500 text-base">{errors.price.message}</span>
      )}
      <label htmlFor="photo">Photo</label>
      <Input
        type="text"
        {...register("photo", { required: true })}
        className="bg-purple-400 p-2 mb-2"
      />
      {errors.photo && (
        <span className="text-red-500 text-base">{errors.photo.message}</span>
      )}
      <Button type="submit" className="bg-purple-400 mt-4 ">
        Crear
      </Button>
    </form>
  );
}
