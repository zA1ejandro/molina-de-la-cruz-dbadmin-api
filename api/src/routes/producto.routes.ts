import { Router } from "express";
import { createProducts, getProducto, getProducts } from "../controllers/producto.controller.js";

const router=Router()

router.get(`/producto:id`,getProducto);
router.get(`/productos`,getProducts);
router.post(`/producto`, createProducts);

export default router;