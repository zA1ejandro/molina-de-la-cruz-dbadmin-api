import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cliente } from "../entity/Cliente.js";
import { Direccion } from "../entity/Direccion.js";
import { Envio } from "../entity/Envio.js";
import { Paquete } from "../entity/Paquete.js";
import { Almacen } from "../entity/Almacen.js";
import { Historial } from "../entity/Historial.js";
import { Auditoria } from "../entity/Auditoria.js";    


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3308,
    username: "root",
    password: "secret",
    database: "logiExpress_db",
    synchronize: false, 
    logging: true,
    entities: [Cliente, Direccion, Envio, Paquete, Almacen, Historial, Auditoria],
    subscribers: [],
    migrations: [],
});
