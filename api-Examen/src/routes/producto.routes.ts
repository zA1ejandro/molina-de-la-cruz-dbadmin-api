import { Router } from "express";
import { createProducts, deleteProducts, getProducto, getProducts, updateProducts } from "../controllers/producto.controller.js";

const router=Router()

router.get(`/producto/:id`,getProducto);
router.get(`/productos`,getProducts);
router.post(`/producto`, createProducts);
router.put(`/producto/:id`, updateProducts);
router.delete(`/producto/:id`, deleteProducts);

export default router;