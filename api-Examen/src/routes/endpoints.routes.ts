import { Router } from "express";
import {
    createEnvio,
    updateCosto,
    addPaqueteAlmacen,
    createRastreo,
    getEnvios,
    getEnviosCliente
} from "../controllers/endpoints.controller.js";

const router = Router();

router.post("/envios", createEnvio);
router.put("/envios/:id/costo", updateCosto);
router.post("/almacenes/:id/paquetes", addPaqueteAlmacen);
router.post("/envios/:id/rastreo", createRastreo);
router.get("/envios", getEnvios);
router.get("/clientes/:id/envios", getEnviosCliente);

export default router;