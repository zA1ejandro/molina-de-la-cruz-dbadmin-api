import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Paquete } from "./Paquete.js";

@Entity("almacen")
export class Almacen {
    @PrimaryGeneratedColumn()
    id_almacen!: number;

    @Column({ type: "varchar", length: 50 })
    nombre_almacen!: string;

    @Column({ type: "varchar", length: 100 })
    ubicacion!: string;

    @Column({ type: "int" })
    capacidad_maxima!: number;

    @Column({ type: "int" })
    cantidad_paquetes!: number;

    @OneToMany(() => Paquete, (paquete) => paquete.almacen)
    paquetes!: Paquete[];
}