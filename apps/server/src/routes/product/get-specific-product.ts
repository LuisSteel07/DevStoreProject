import { Router, type Request, type Response } from "express";
import { db, DrizzleORM } from "@repo/db/dist/index";
import { ProductSchema } from "@repo/db/dist/schemas/productSchema";

const getSpecificProduct = Router();

getSpecificProduct.post("/specific", async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const product = await db
      .select()
      .from(ProductSchema)
      .where(DrizzleORM.eq(ProductSchema.id, id))
      .limit(1);

    return res.status(200).json(product[0]);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default getSpecificProduct;
