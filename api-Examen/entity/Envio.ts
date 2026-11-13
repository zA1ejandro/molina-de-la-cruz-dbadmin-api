import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import type { Relation } from "typeorm";
import { Cliente } from "./Cliente.js";
import { Direccion } from "./Direccion.js";
import { Paquete } from "./Paquete.js";
import { Historial } from "./Historial.js";
import { Auditoria } from "./Auditoria.js";

@Entity("envio")
export class Envio {
    @PrimaryGeneratedColumn()
    id_envio!: number;

    @Column({ type: "int" })
    remitente!: number;

    @Column({ type: "int" })
    destinatario!: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    costo_total!: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    fecha!: Date;

    @Column({ type: "varchar", length: 50 })
    estado_envio!: string;

    @Column({ type: "int" })
    id_direccion!: number;

    @ManyToOne(() => Cliente, (cliente) => cliente.envios_enviados)
    @JoinColumn({ name: "remitente" })
    cliente_remitente!: Relation<Cliente>;

    @ManyToOne(() => Cliente, (cliente) => cliente.envios_recibidos)
    @JoinColumn({ name: "destinatario" })
    cliente_destinatario!: Relation<Cliente>;

    @ManyToOne(() => Direccion, (direccion) => direccion.envios)
    @JoinColumn({ name: "id_direccion" })
    direccion!: Relation<Direccion>;

    @OneToMany(() => Paquete, (paquete) => paquete.envio)
    paquetes!: Paquete[];

    @OneToMany(() => Historial, (historial) => historial.envio)
    historial!: Historial[];

    @OneToMany(() => Auditoria, (auditoria) => auditoria.envio)
    auditorias!: Auditoria[];
}