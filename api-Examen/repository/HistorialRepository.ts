import { AppDataSource } from "../config/data-source.js";
import { Historial } from "../entity/Historial.js";


export class HistorialRepository {
    private repository = AppDataSource.getRepository(Historial);

    async create(historialData: Partial<Historial>): Promise<Historial> {
        const historial = this.repository.create(historialData);
        return await this.repository.save(historial);
    }
}

export const historialRepository = new HistorialRepository();