import { Router } from "express";
import deleteProduct from "./delete-product";
import filterProduct from "./filter-proucts";
import getProduct from "./get-products";
import insertProduct from "./insert-product";
import updateProduct from "./update-product";
import getSpecificProduct from "./get-specific-product";

const ProductRoute = Router();

ProductRoute.use("/product", deleteProduct);
ProductRoute.use("/product", filterProduct);
ProductRoute.use("/product", getProduct);
ProductRoute.use("/product", insertProduct);
ProductRoute.use("/product", updateProduct);
ProductRoute.use("/product", getSpecificProduct);

export default ProductRoute;
