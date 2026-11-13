USE logiExpress_db;
DROP PROCEDURE IF EXISTS sp_reporte_mensual_cliente;

DELIMITER ;;

CREATE PROCEDURE sp_reporte_mensual_cliente(
    IN p_id_cliente INT,
    IN p_mes INT,
    IN p_anio INT
)
BEGIN
    SELECT SUM(e.costo_total) AS facturacion_total,
           COUNT(h.id_historial) AS envios_entregados,
           AVG(DATEDIFF(h.fecha, e.fecha)) AS tiempo_promedio_entrega
    FROM envio e
    LEFT JOIN historial h ON h.id_envio = e.id_envio AND h.estado_envio = 'ENTREGADO'
    WHERE e.remitente = p_id_cliente
      AND MONTH(e.fecha) = p_mes
      AND YEAR(e.fecha) = p_anio
      AND e.estado_envio <> 'CANCELADO';
END;;

DELIMITER ;