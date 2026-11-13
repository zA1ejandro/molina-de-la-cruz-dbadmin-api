USE logiExpress_db;
DROP TRIGGER IF EXISTS after_insert_historial_rastreo;

DELIMITER ;;

CREATE TRIGGER after_insert_historial_rastreo
AFTER INSERT ON historial
FOR EACH ROW
BEGIN
    IF NEW.estado_envio = 'ENTREGADO' THEN
        UPDATE envio
        SET estado_envio = 'ENTREGADO'
        WHERE id_envio = NEW.id_envio;
    END IF;
END;;

DELIMITER ;