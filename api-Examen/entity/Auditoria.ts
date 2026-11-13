import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Envio } from "./Envio.js";

@Entity("auditoria")
export class Auditoria {
    @PrimaryGeneratedColumn()
    id_auditoria!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    costo_anterior!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    costo_nuevo!: number;

    @Column({ type: "varchar", length: 50 })
    usuario!: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha_modificacion!: Date;

    @Column({ type: "int" })
    id_envio!: number;

    @ManyToOne(() => Envio, (envio) => envio.auditorias)
    @JoinColumn({ name: "id_envio" })
    envio!: Relation<Envio>;
}