import { Router } from "express";
import deleteProduct from "./delete-product";
import filterProduct from "./filter-proucts";
import getProduct from "./get-products";
import insertProduct from "./insert-product";
import updateProduct from "./update-product";

const productRoute = Router();

productRoute.use("/product", deleteProduct);
productRoute.use("/product", filterProduct);
productRoute.use("/product", getProduct);
productRoute.use("/product", insertProduct);
productRoute.use("/product", updateProduct);

export default productRoute;
