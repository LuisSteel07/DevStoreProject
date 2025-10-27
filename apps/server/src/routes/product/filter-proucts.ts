import { Router, type Request, type Response } from "express";
import { db, DrizzleORM } from "@repo/db/dist/index";
import { ProductSchema } from "@repo/db/dist/schemas/productSchema";

const filterProduct = Router();

filterProduct.post("/filter", async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const products = await db
      .select()
      .from(ProductSchema)
      .where(DrizzleORM.like(ProductSchema.name, `%${name}%`));

    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default filterProduct;
