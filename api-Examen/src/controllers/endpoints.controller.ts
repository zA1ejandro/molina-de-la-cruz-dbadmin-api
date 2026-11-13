import { Request, Response } from "express";
import { envioRepository } from "../../repository/EnvioRepository.js";
import { paqueteRepository } from "../../repository/PaqueteRepository.js";
import { historialRepository } from "../../repository/HistorialRepository.js";

export const createEnvio = async (req: Request, resp: Response) => {
    const { remitente, destinatario, costo_total, estado_envio, id_direccion, paquetes } = req.body;
    const envio = await envioRepository.createConPaquetes(
        { remitente, destinatario, costo_total, estado_envio, id_direccion },
        paquetes
    );
    return resp.status(201).json({ message: "Envio creado", status: 201, data: envio });
};

export const updateCosto = async (req: Request, resp: Response) => {
    const id = Number(req.params.id);
    const { costo_total } = req.body;
    const envio = await envioRepository.update(id, { costo_total });
    if (!envio) {
        return resp.status(404).json({ message: "Envio no encontrado", status: 404 });
    }
    return resp.json({ message: "Costo actualizado", status: 200, data: envio });
};

export const addPaqueteAlmacen = async (req: Request, resp: Response) => {
    const id_almacen = Number(req.params.id);
    const { id_envio, peso_paquete, dimensiones, contenido_paquete } = req.body;
    try {
        const paquete = await paqueteRepository.create({
            id_almacen, id_envio, peso_paquete, dimensiones, contenido_paquete
        });
        return resp.status(201).json({ message: "Paquete agregado", status: 201, data: paquete });
    } catch (error: any) {
        if (error.driverError?.sqlState === "45000") {
            return resp.status(400).json({ message: error.driverError.sqlMessage, status: 400 });
        }
        return resp.status(500).json({ message: "Error del servidor", status: 500 });
    }
};

export const createRastreo = async (req: Request, resp: Response) => {
    const id_envio = Number(req.params.id);
    const { ubicacion_actual, estado_envio, observaciones } = req.body;
    const historial = await historialRepository.create({
        id_envio, ubicacion_actual, estado_envio, observaciones
    });
    return resp.status(201).json({ message: "Rastreo registrado", status: 201, data: historial });
};

export const getEnvios = async (req: Request, resp: Response) => {
    const envios = await envioRepository.findActivos();
    return resp.json({ envios });
};

export const getEnviosCliente = async (req: Request, resp: Response) => {
    const id = Number(req.params.id);
    const envios = await envioRepository.findByCliente(id);
    return resp.json({ envios });
};