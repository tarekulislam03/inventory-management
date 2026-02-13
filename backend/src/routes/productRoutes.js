import { Router } from "express";
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from "../controllers/productController.js"
import { lowStock, soonToExpiry } from "../controllers/alertController.js";

const productRouter = Router();

productRouter.post("/create", createProduct);
productRouter.get("/get", getProducts);
productRouter.get("/get/:id", getProductById);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);
productRouter.get("/lowstock", lowStock);
productRouter.get("/soontoexpiry", soonToExpiry );


export default productRouter;