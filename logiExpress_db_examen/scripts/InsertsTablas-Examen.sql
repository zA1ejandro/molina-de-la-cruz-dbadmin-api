USE logiExpress_db;

INSERT INTO cliente (nombre_cliente, estado_cliente, limite_credito) VALUES
('Ichigo Kurosaki',  'ACTIVO',   15000.00),
('Rukia Kuchiki',    'ACTIVO',   20000.00),
('Kisuke Urahara',   'ACTIVO',   50000.00),
('Byakuya Kuchiki',  'ACTIVO',   80000.00),
('Sosuke Aizen',     'INACTIVO',     0.00);

INSERT INTO direccion (direccion_origen, direccion_destino, id_cliente) VALUES
('Clínica Kurosaki, Ciudad Karakura',                'Cuartel 13, Seireitei, Sociedad de Almas',          1),
('Clínica Kurosaki, Ciudad Karakura',                'Mansión Kuchiki, Seireitei, Sociedad de Almas',     1),
('Tienda Urahara, Ciudad Karakura',                  'Clínica Kurosaki, Ciudad Karakura',                 3),
('Mansión Kuchiki, Seireitei, Sociedad de Almas',    'Tienda Urahara, Ciudad Karakura',                   4),
('Cuartel 13, Seireitei, Sociedad de Almas',         'Clínica Kurosaki, Ciudad Karakura',                 2);

INSERT INTO almacen (nombre_almacen, ubicacion, capacidad_maxima, cantidad_paquetes) VALUES
('Almacén Seireitei Central',   'Seireitei, Sociedad de Almas',  500, 1),
('Bodega Tienda Urahara',       'Ciudad Karakura, Japón',          2, 2),
('Almacén Rukongai Distrito 1', 'Rukongai, Sociedad de Almas',   150, 0),
('Almacén Las Noches',          'Hueco Mundo',                   300, 0),
('Almacén Cuartel 12',          'Seireitei, Sociedad de Almas',   80, 0);

INSERT INTO envio (remitente, destinatario, costo_total, fecha, estado_envio, id_direccion) VALUES
(1, 2,  250.00, '2026-11-02 09:00:00', 'ENTREGADO',   1),
(1, 4,  480.50, '2026-11-05 14:30:00', 'ENTREGADO',   2),
(3, 1, 1200.00, '2026-11-08 11:15:00', 'EN TRANSITO', 3),
(4, 3, 3500.00, '2026-11-10 16:45:00', 'REGISTRADO',  4),
(2, 1,   90.00, '2026-11-11 08:20:00', 'CANCELADO',   5);

INSERT INTO paquete (peso_paquete, dimensiones, contenido_paquete, id_almacen, id_envio) VALUES
(1.20, '40x30x10 cm',  'Uniforme de Shinigami',          NULL, 1),
(2.40, '35x25x20 cm',  'Set de té de Karakura',          NULL, 2),
(6.50, '170x50x30 cm', 'Gigai de repuesto',                 2, 3),
(0.50, '15x10x8 cm',   'Caja de Pastillas de Gikongan',     2, 3),
(0.40, '15x10x5 cm',   'Estuche de Kenseikan Kuchiki',      1, 4);

INSERT INTO historial (fecha, ubicacion_actual, estado_envio, observaciones, id_envio) VALUES
('2026-11-02 09:00:00', 'Clínica Kurosaki, Ciudad Karakura',        'REGISTRADO',  'Envío registrado en sucursal Karakura',           1),
('2026-11-04 17:30:00', 'Cuartel 13, Seireitei',                    'ENTREGADO',   'Entregado a Rukia Kuchiki',                       1),
('2026-11-05 14:30:00', 'Clínica Kurosaki, Ciudad Karakura',        'REGISTRADO',  'Envío registrado en sucursal Karakura',           2),
('2026-11-06 10:00:00', 'Mansión Kuchiki, Seireitei',               'ENTREGADO',   'Recibido por el personal de la mansión',          2),
('2026-11-08 18:00:00', 'Bodega Tienda Urahara, Ciudad Karakura',   'EN TRANSITO', 'Paquetes salieron hacia Karakura centro',         3);