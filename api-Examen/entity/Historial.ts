import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Envio } from "./Envio.js";

@Entity("historial")
export class Historial {
    @PrimaryGeneratedColumn()
    id_historial!: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha!: Date;

    @Column({ type: "varchar", length: 100 })
    ubicacion_actual!: string;

    @Column({ type: "varchar", length: 50 })
    estado_envio!: string;

    @Column({ type: "text" })
    observaciones!: string;

    @Column({ type: "int" })
    id_envio!: number;

    @ManyToOne(() => Envio, (envio) => envio.historial)
    @JoinColumn({ name: "id_envio" })
    envio!: Relation<Envio>;
}