import express from "express";
const app = express();
app.use(express.json());

import productRouter from "./routes/productRoutes.js"

app.use("/api/v1/product", productRouter)


export default app;