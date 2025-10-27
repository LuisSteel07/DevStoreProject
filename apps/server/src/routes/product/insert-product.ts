import { Router, type Request, type Response } from "express";
import { db } from "@repo/db/dist/index";
import { ProductSchema } from "@repo/db/dist/schemas/productSchema";
import { Product, TProduct } from "@repo/types/dist/types/product";

const insertProduct = Router();

insertProduct.post("/insert", async (req: Request, res: Response) => {
  try {
    const { name, description, photo, amount, price } = req.body;

    const product: Omit<TProduct, "id"> = {
      name,
      description,
      photo,
      amount,
      price,
    };

    const safeObject = Product.safeParse({ id: 1, ...product });

    if (!safeObject.success) {
      return res
        .status(500)
        .json({ error: `Invalid Data: ${safeObject.error.issues}` });
    }

    const returning_product = await db
      .insert(ProductSchema)
      .values(product)
      .returning();

    return res.json({ data: returning_product }).status(200);
  } catch (err) {
    return res.json({ error: err }).status(500);
  }
});

export default insertProduct;
