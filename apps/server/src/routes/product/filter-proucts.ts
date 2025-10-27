import { db } from "@repo/db/dist";
import { ProductSchema } from "@repo/db/dist/schemas/productSchema";
import { Router, type Request, type Response } from "express";

const filterProduct = Router();

filterProduct.post("/filter", async (req: Request, res: Response) => {});

export default filterProduct;
