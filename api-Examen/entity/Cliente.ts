import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Direccion } from "./Direccion.js";
import { Envio } from "./Envio.js";

@Entity("cliente")
export class Cliente {
    @PrimaryGeneratedColumn()
    id_cliente!: number;

    @Column({ type: "varchar", length: 50 })
    nombre_cliente!: string;

    @Column({ type: "varchar", length: 50 })
    estado_cliente!: string;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    limite_credito!: number;

    @OneToMany(() => Direccion, (direccion) => direccion.cliente)
    direcciones!: Direccion[];

    @OneToMany(() => Envio, (envio) => envio.cliente_remitente)
    envios_enviados!: Envio[];

    @OneToMany(() => Envio, (envio) => envio.cliente_destinatario)
    envios_recibidos!: Envio[];
}