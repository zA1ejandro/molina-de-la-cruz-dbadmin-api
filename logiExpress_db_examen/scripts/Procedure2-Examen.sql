USE logiExpress_db;
DROP PROCEDURE IF EXISTS sp_obtener_hoja_ruta_envio;

DELIMITER ;;

CREATE PROCEDURE sp_obtener_hoja_ruta_envio(
    IN p_id_envio INT
)
BEGIN
    SELECT e.id_envio, e.estado_envio,
           r.nombre_cliente AS remitente,
           d.nombre_cliente AS destinatario
    FROM envio e
    INNER JOIN cliente r ON e.remitente = r.id_cliente
    INNER JOIN cliente d ON e.destinatario = d.id_cliente
    WHERE e.id_envio = p_id_envio;

    SELECT * FROM paquete WHERE id_envio = p_id_envio;

    SELECT * FROM historial WHERE id_envio = p_id_envio ORDER BY fecha ASC;
END;;

DELIMITER ;