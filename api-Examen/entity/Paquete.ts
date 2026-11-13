import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Envio } from "./Envio.js";
import { Almacen } from "./Almacen.js";

@Entity("paquete")
export class Paquete {
    @PrimaryGeneratedColumn()
    id_paquete!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    peso_paquete!: number;

    @Column({ type: "varchar", length: 50 })
    dimensiones!: string;

    @Column({ type: "varchar", length: 100 })
    contenido_paquete!: string;

    @Column({ type: "int", nullable: true })
    id_almacen!: number | null;

    @Column({ type: "int" })
    id_envio!: number;

    @ManyToOne(() => Almacen, (almacen) => almacen.paquetes, { nullable: true })
    @JoinColumn({ name: "id_almacen" })
    almacen!: Relation<Almacen> | null;

    @ManyToOne(() => Envio, (envio) => envio.paquetes)
    @JoinColumn({ name: "id_envio" })
    envio!: Relation<Envio>;
}