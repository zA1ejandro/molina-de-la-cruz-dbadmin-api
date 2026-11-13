import { Request, Response } from "express";
import { ventaRepository } from "../../repository/VentaRepository.js";

export const getVenta=async(req:Request,resp:Response)=>{
    const id=Number(req.params.id);
    const venta=await ventaRepository.findById(id);
    return resp.json({venta});
}

export const getVentas=async(req:Request,resp:Response)=>{
    const ventas=await ventaRepository.findAll();
    return resp.json({ventas});
}

export const createVenta=async(req:Request,resp:Response)=>{
    const {cliente,fecha,detalles}=req.body;
    const venta=await ventaRepository.create({cliente,fecha,detalles});
    return resp.status(201).json({message:"Venta creada",
        status:201,
        data:venta
    })
}

export const updateVenta=async(req:Request,resp:Response)=>{
    const id=Number(req.params.id);
    const {cliente,fecha,total}=req.body;
    const venta=await ventaRepository.update(id,{cliente,fecha,total});
    return resp.json({message:"Venta actualizada",
        status:200,
        data:venta
    })
}

export const deleteVenta=async(req:Request,resp:Response)=>{
    const id=Number(req.params.id);
    const eliminado=await ventaRepository.delete(id);
    return resp.json({message:"Venta eliminada",
        status:200
    })
}