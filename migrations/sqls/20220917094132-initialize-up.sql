/* Replace with your SQL commands */
CREATE TABLE public."Users"
(
    id bigint,
    firstname character varying COLLATE pg_catalog."default",
    lastname character varying COLLATE pg_catalog."default"
)

TABLESPACE pg_default;

ALTER TABLE public."Users"
    OWNER to postgres;