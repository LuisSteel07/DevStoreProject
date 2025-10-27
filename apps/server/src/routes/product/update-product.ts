import { db, DrizzleORM } from "@repo/db/dist";
import { ProductSchema } from "@repo/db/dist/schemas";
import { TProduct } from "@repo/types/dist/types/product";
import { Router, type Request, type Response } from "express";

const updateProduct = Router();

updateProduct.post("/update", async (req: Request, res: Response) => {
  try {
    const { id, name, description, photo, amount, price } = req.body;

    const product: Omit<TProduct, "id"> = {
      name,
      description,
      photo,
      amount,
      price,
    };

    if (!id) {
      return res.status(500).json({ error: "Invalid data to run query!" });
    }

    const result = await db
      .update(ProductSchema)
      .set({ ...product })
      .where(DrizzleORM.eq(ProductSchema.id, id))
      .returning()
      .then((e) => {
        return e[0];
      });

    if (!result) {
      return res.status(500).json({ error: "Product not found!" });
    }

    res.status(200).json({ product });
  } catch (err) {
    return res.status(500).json({ error: err });
  }
});

export default updateProduct;
