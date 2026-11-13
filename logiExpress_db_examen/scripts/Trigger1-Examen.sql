USE logiExpress_db;
DROP TRIGGER IF EXISTS after_update_envio_costo;

DELIMITER ;;

CREATE TRIGGER after_update_envio_costo
AFTER UPDATE ON envio
FOR EACH ROW
BEGIN
    IF OLD.costo_total != NEW.costo_total THEN
        INSERT INTO auditoria (costo_anterior, costo_nuevo, usuario, id_envio)
        VALUES (OLD.costo_total, NEW.costo_total, USER(), NEW.id_envio);
    END IF;
END;;

DELIMITER ;