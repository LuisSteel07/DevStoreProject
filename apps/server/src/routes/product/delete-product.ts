import { Router, type Request, type Response } from "express";

const deleteProduct = Router();

deleteProduct.post("/delete", (req: Request, res: Response) => {});

export default deleteProduct;
