import { Router, type Request, type Response } from "express";
import { db } from "@repo/db/dist/index";
import { ProductSchema } from "@repo/db/dist/schemas/productSchema";
import { Product } from "@repo/types/dist/types/product";

const insertProduct = Router();

insertProduct.post("/insert", async (req: Request, res: Response) => {
  try {
    const result = Product.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    if (!Number.isInteger(result.data.amount)) {
      return res.status(400).json({ error: result.error });
    }

    const returning_product = await db
      .insert(ProductSchema)
      .values({ ...result.data })
      .returning();

    return res
      .status(201)
      .json({ message: "Producto creado", product: returning_product[0] });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
});

export default insertProduct;
