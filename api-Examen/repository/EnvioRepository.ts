import { In } from "typeorm";
import { AppDataSource } from "../config/data-source.js";
import { Envio } from "../entity/Envio.js";
import { Paquete } from "../entity/Paquete.js";


export class EnvioRepository {
    private repository = AppDataSource.getRepository(Envio);

    async findActivos(): Promise<Envio[]> {
        return await this.repository.find({
            where: { estado_envio: In(["REGISTRADO", "EN TRANSITO"]) },
            relations: { cliente_remitente: true, cliente_destinatario: true, paquetes: true }
        });
    }

    async findById(id: number): Promise<Envio | null> {
        return await this.repository.findOne({
            where: { id_envio: id },
            relations: { paquetes: true }
        });
    }

    async findByCliente(idCliente: number): Promise<Envio[]> {
        return await this.repository.find({
            where: [{ remitente: idCliente }, { destinatario: idCliente }],
            relations: { historial: true },
            order: { fecha: "DESC" }
        });
    }

    async createConPaquetes(envioData: Partial<Envio>, paquetesData: Partial<Paquete>[]): Promise<Envio> {
        return await AppDataSource.transaction(async (manager) => {
            const envio = await manager.save(manager.create(Envio, envioData));

            for (const paqueteData of paquetesData) {
                const paquete = manager.create(Paquete, { ...paqueteData, id_envio: envio.id_envio });
                await manager.save(paquete);
            }

            return envio;
        });
    }

    async update(id: number, envioData: Partial<Envio>): Promise<Envio | null> {
        await this.repository.update(id, envioData);
        return await this.findById(id);
    }
}

export const envioRepository = new EnvioRepository();