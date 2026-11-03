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

export const updateProducts=async(req:Request,resp:Response)=>{
    const id=Number(req.params.id);
    const {nombre,precio,stock,categoriaId}=req.body;
    const product=await productoRepository.update(id,{nombre,precio,stock,categoriaId});
    if(!product){
        return resp.status(404).json({message:"Producto no encontrado",
            status:404
        })
    }
    return resp.json({message:"Producto actualizado",
        status:200,
        data:product
    })
}

export const deleteProducts=async(req:Request,resp:Response)=>{
    const id=Number(req.params.id);
    const eliminado=await productoRepository.delete(id);
    if(!eliminado){
        return resp.status(404).json({message:"Producto no encontrado",
            status:404
        })
    }
    return resp.json({message:"Producto eliminado",
        status:200
    })
}