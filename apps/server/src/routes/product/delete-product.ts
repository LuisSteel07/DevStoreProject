import { db, DrizzleORM } from "@repo/db/dist";
import { ProductSchema } from "@repo/db/dist/schemas";
import { Router, type Request, type Response } from "express";

const deleteProduct = Router();

deleteProduct.post("/delete", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deleteProduct = await db
      .delete(ProductSchema)
      .where(DrizzleORM.eq(ProductSchema.id, id))
      .returning()
      .then((e) => {
        return e[0];
      });

    if (!deleteProduct) {
      return res.status(500).json({ error: "Product not found!" });
    }

    res.status(200).json({ delete: deleteProduct });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

export default deleteProduct;
