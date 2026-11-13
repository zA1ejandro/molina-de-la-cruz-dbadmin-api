import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Cliente } from "./Cliente.js";
import { Envio } from "./Envio.js";

@Entity("direccion")
export class Direccion {
    @PrimaryGeneratedColumn()
    id_direccion!: number;

    @Column({ type: "varchar", length: 100 })
    direccion_origen!: string;

    @Column({ type: "varchar", length: 100 })
    direccion_destino!: string;

    @Column({ type: "int" })
    id_cliente!: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.direcciones)
    @JoinColumn({ name: "id_cliente" })
    cliente!: Relation<Cliente>;

    @OneToMany(() => Envio, (envio) => envio.direccion)
    envios!: Envio[];
}