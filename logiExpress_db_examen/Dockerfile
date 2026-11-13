FROM mysql:8.0

COPY ./scripts/CreacionTablas-Examen.sql /docker-entrypoint-initdb.d/
COPY ./scripts/InsertsTablas-Examen.sql /docker-entrypoint-initdb.d/
COPY ./scripts/Procedure1-Examen.sql /docker-entrypoint-initdb.d/
COPY ./scripts/Procedure2-Examen.sql /docker-entrypoint-initdb.d/
COPY ./scripts/Trigger1-Examen.sql /docker-entrypoint-initdb.d/
COPY ./scripts/Trigger2-Examen.sql /docker-entrypoint-initdb.d/
COPY ./scripts/Trigger3-Examen.sql /docker-entrypoint-initdb.d/