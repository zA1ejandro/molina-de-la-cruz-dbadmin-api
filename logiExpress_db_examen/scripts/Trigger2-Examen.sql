USE logiExpress_db;
DROP TRIGGER IF EXISTS before_insert_paquete_almacen;

DELIMITER ;;

CREATE TRIGGER before_insert_paquete_almacen
BEFORE INSERT ON paquete
FOR EACH ROW
BEGIN
    DECLARE cantidad_almacenada INT;
    DECLARE capacidad_almacen INT;

    IF NEW.id_almacen IS NOT NULL THEN
        SELECT cantidad_paquetes, capacidad_maxima
        INTO cantidad_almacenada, capacidad_almacen
        FROM almacen
        WHERE id_almacen = NEW.id_almacen;

        IF cantidad_almacenada >= capacidad_almacen THEN
            SIGNAL SQLSTATE '45000'
            SET MESSAGE_TEXT = 'El almacen no tiene capacidad disponible';
        ELSE
            UPDATE almacen
            SET cantidad_paquetes = cantidad_paquetes + 1
            WHERE id_almacen = NEW.id_almacen;
        END IF;
    END IF;
END;;

DELIMITER ;