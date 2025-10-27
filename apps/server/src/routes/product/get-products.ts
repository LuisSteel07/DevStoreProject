import { db } from "@repo/db/dist";
import { ProductSchema } from "@repo/db/dist/schemas/productSchema";
import { Router, type Request, type Response } from "express";

const getProduct = Router();

getProduct.get("/get", async (req: Request, res: Response) => {
  try {
    const all_products = await db.select().from(ProductSchema);

    return res.json(all_products);
  } catch (err) {
    return res.json({ error: "Internal Server Error" }).status(500);
  }
});

export default getProduct;
