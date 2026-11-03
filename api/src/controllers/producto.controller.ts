import { Request,Response } from "express";
import { productoRepository, ProductoRepository } from "../../repository/ProductoRepository.js";
import { Producto } from "../../entity/Producto.js";

export const getProducto =async (req:Request, resp:Response) =>{
    const producto= await productoRepository.findById(1);
    return resp.json({producto});
}

export const getProducts=async(req:Request,resp:Response)=>{
    const productos=await productoRepository.findAll();
    return resp.json({productos});
}

export const createProducts=async(req:Request,resp:Response)=>{
    const {nombre,precio,stock,categoriaId}=req.body;
    const product=await productoRepository.create({nombre,precio,stock,categoriaId});
    return resp.json({mesasge:"Producto creado",
        status:201,
        data:product
    })
}
