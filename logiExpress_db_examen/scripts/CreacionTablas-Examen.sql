CREATE DATABASE IF NOT EXISTS logiExpress_db;

USE logiExpress_db;

CREATE TABLE IF NOT EXISTS cliente(
    id_cliente INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_cliente VARCHAR(50) NOT NULL,
    estado_cliente VARCHAR(50) NOT NULL,
    limite_credito DECIMAL(10,2) NOT NULL,
    CONSTRAINT check_estado_cliente CHECK (estado_cliente IN ('ACTIVO','INACTIVO')),
    CONSTRAINT check_limite_credito CHECK (limite_credito >= 0)
);

CREATE TABLE IF NOT EXISTS direccion(
    id_direccion INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    direccion_origen VARCHAR(100) NOT NULL,
    direccion_destino VARCHAR(100) NOT NULL,
    id_cliente INT NOT NULL,
    CONSTRAINT fk_id_cliente FOREIGN KEY (id_cliente) REFERENCES cliente(id_cliente)
);

CREATE TABLE IF NOT EXISTS envio(
    id_envio INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    remitente INT NOT NULL,
    destinatario INT NOT NULL,
    costo_total DECIMAL(10,2) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    estado_envio VARCHAR(50) NOT NULL,
    id_direccion INT NOT NULL,
    CONSTRAINT check_costo_total CHECK (costo_total >= 0),
    CONSTRAINT check_estado_envio CHECK (estado_envio IN ('REGISTRADO','EN TRANSITO', 'ENTREGADO','CANCELADO')),
    CONSTRAINT fk_id_direccion FOREIGN KEY (id_direccion) REFERENCES direccion(id_direccion),
    CONSTRAINT fk_remitente FOREIGN KEY (remitente) REFERENCES cliente(id_cliente),
    CONSTRAINT fk_destinatario FOREIGN KEY (destinatario) REFERENCES cliente(id_cliente)
);

CREATE TABLE IF NOT EXISTS almacen(
    id_almacen INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nombre_almacen VARCHAR(50) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    capacidad_maxima INT NOT NULL,
    cantidad_paquetes INT NOT NULL,
    CONSTRAINT check_capacidad_maxima CHECK (capacidad_maxima > 0),
    CONSTRAINT check_cantidad_paquetes CHECK (cantidad_paquetes >= 0 AND cantidad_paquetes <= capacidad_maxima)
);

CREATE TABLE IF NOT EXISTS paquete(
    id_paquete INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    peso_paquete DECIMAL(10,2) NOT NULL,
    dimensiones VARCHAR(50) NOT NULL,
    contenido_paquete VARCHAR(100) NOT NULL,
    id_almacen INT,
    id_envio INT NOT NULL,
    CONSTRAINT check_peso_paquete CHECK (peso_paquete > 0),
    CONSTRAINT fk_id_almacen FOREIGN KEY (id_almacen) REFERENCES almacen(id_almacen),
    CONSTRAINT fk_paquete_envio FOREIGN KEY (id_envio) REFERENCES envio(id_envio)
);

CREATE TABLE IF NOT EXISTS historial(
    id_historial INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    ubicacion_actual VARCHAR(100) NOT NULL,
    estado_envio VARCHAR(50) NOT NULL,
    observaciones TEXT NOT NULL,
    id_envio INT NOT NULL,
    CONSTRAINT check_historial_estado_envio CHECK (estado_envio IN ('REGISTRADO','EN TRANSITO', 'ENTREGADO','CANCELADO')),
    CONSTRAINT fk_historial_envio FOREIGN KEY (id_envio) REFERENCES envio(id_envio)
);

CREATE TABLE IF NOT EXISTS auditoria(
    id_auditoria INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    costo_anterior DECIMAL(10,2) NOT NULL,
    costo_nuevo DECIMAL(10,2) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    fecha_modificacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    id_envio INT NOT NULL,
    CONSTRAINT fk_auditoria_envio FOREIGN KEY (id_envio) REFERENCES envio(id_envio)
);