--
-- PostgreSQL database dump
--

-- Dumped from database version 13.13
-- Dumped by pg_dump version 13.13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: flyway_schema_history; Type: TABLE; Schema: public; Owner: aga2ocom_usr
--

CREATE TABLE public.flyway_schema_history (
    installed_rank integer NOT NULL,
    version character varying(50),
    description character varying(200) NOT NULL,
    type character varying(20) NOT NULL,
    script character varying(1000) NOT NULL,
    checksum integer,
    installed_by character varying(100) NOT NULL,
    installed_on timestamp without time zone DEFAULT now() NOT NULL,
    execution_time integer NOT NULL,
    success boolean NOT NULL
);


ALTER TABLE public.flyway_schema_history OWNER TO aga2ocom_usr;

--
-- Name: injector; Type: TABLE; Schema: public; Owner: aga2ocom_usr
--

CREATE TABLE public.injector (
    id text NOT NULL,
    model text NOT NULL,
    plan_id text NOT NULL,
    description text
);


ALTER TABLE public.injector OWNER TO aga2ocom_usr;

--
-- Name: plan; Type: TABLE; Schema: public; Owner: aga2ocom_usr
--

CREATE TABLE public.plan (
    id text NOT NULL,
    code text NOT NULL,
    type text NOT NULL,
    description text,
    max_resistance numeric,
    min_resistance numeric,
    max_reactance numeric,
    min_reactance numeric,
    max_isolation numeric,
    min_isolation numeric,
    max_half_load numeric,
    min_half_load numeric,
    half_load_pressure numeric,
    max_full_load numeric,
    min_full_load numeric,
    full_load_pressure numeric,
    max_idling numeric,
    min_idling numeric,
    idling_pressure numeric,
    max_pre_injection numeric,
    min_pre_injection numeric,
    pre_injection_pressure numeric,
    max_half_load_return numeric,
    min_half_load_return numeric,
    max_full_load_return numeric,
    min_full_load_return numeric,
    max_idling_return numeric,
    min_idling_return numeric,
    max_pre_injection_return numeric,
    min_pre_injection_return numeric
);


ALTER TABLE public.plan OWNER TO aga2ocom_usr;

--
-- Name: test; Type: TABLE; Schema: public; Owner: aga2ocom_usr
--

CREATE TABLE public.test (
    id text NOT NULL,
    injector_number numeric NOT NULL,
    sequence numeric NOT NULL,
    description text,
    comments text,
    date text NOT NULL,
    resistance numeric,
    reactance numeric,
    isolation numeric,
    half_load numeric,
    full_load numeric,
    idling numeric,
    pre_injection numeric,
    half_load_return numeric,
    full_load_return numeric,
    idling_return numeric,
    pre_injection_return numeric,
    plan_id text NOT NULL,
    injector_id text NOT NULL,
    vehicle_id text,
    ima_code text,
    service_order text,
    customer_name text
);


ALTER TABLE public.test OWNER TO aga2ocom_usr;

--
-- Name: users; Type: TABLE; Schema: public; Owner: aga2ocom_usr
--

CREATE TABLE public.users (
    id text NOT NULL,
    name text NOT NULL,
    login text NOT NULL,
    password text NOT NULL,
    role text NOT NULL
);


ALTER TABLE public.users OWNER TO aga2ocom_usr;

--
-- Name: vehicle; Type: TABLE; Schema: public; Owner: aga2ocom_usr
--

CREATE TABLE public.vehicle (
    id text NOT NULL,
    plate text NOT NULL,
    model text NOT NULL,
    year_model text NOT NULL,
    owner text NOT NULL
);


ALTER TABLE public.vehicle OWNER TO aga2ocom_usr;

--
-- Data for Name: flyway_schema_history; Type: TABLE DATA; Schema: public; Owner: aga2ocom_usr
--

COPY public.flyway_schema_history (installed_rank, version, description, type, script, checksum, installed_by, installed_on, execution_time, success) FROM stdin;
1	1	create table	SQL	V1__create_table.sql	1562884468	aga2ocom_usr	2023-12-19 03:58:10.822936	40	t
2	2	load tables	SQL	V2__load_tables.sql	396427976	aga2ocom_usr	2023-12-19 03:58:10.917525	37	t
\.


--
-- Data for Name: injector; Type: TABLE DATA; Schema: public; Owner: aga2ocom_usr
--

COPY public.injector (id, model, plan_id, description) FROM stdin;
668853fb-81f1-46af-9562-3b0b5402a2e6	23670-0L050	9b9d197a-f1e7-42e9-baa9-b445814ef64c	Injetor Hilux 3.0 2005 a 2010 095000-8290 (23670-0L050 /0L020)
6d01dd9d-b478-4473-82db-44288e37c27b	0445120007	71e23d0a-da31-4e9f-afb5-484fe77798c3	Bico Injetor Cummins Isb 0445120007
67b338fb-1ba7-4e55-9d09-8a31561ef0b3	23670-0L090	ad32b942-474d-4f48-b5a6-b5cf6bc3311d	Bico Injetor 23670-0L090 Toyota Hilux
\.


--
-- Data for Name: plan; Type: TABLE DATA; Schema: public; Owner: aga2ocom_usr
--

COPY public.plan (id, code, type, description, max_resistance, min_resistance, max_reactance, min_reactance, max_isolation, min_isolation, max_half_load, min_half_load, half_load_pressure, max_full_load, min_full_load, full_load_pressure, max_idling, min_idling, idling_pressure, max_pre_injection, min_pre_injection, pre_injection_pressure, max_half_load_return, min_half_load_return, max_full_load_return, min_full_load_return, max_idling_return, min_idling_return, max_pre_injection_return, min_pre_injection_return) FROM stdin;
71e23d0a-da31-4e9f-afb5-484fe77798c3	0445120007	INDUTIVO	Bico Injetor Cummins Isb 0445120007	360	330	0	0	0	30	28	18	800	47	33	1400	9	6	300	0	0	0	15	3	35	5	10	2	0	0
ad32b942-474d-4f48-b5a6-b5cf6bc3311d	23670-0L090	INDUTIVO	Bico Injetor 23670-0L090 Toyota Hilux	600	200	0	0	0	30	14.5	5.3	1000	84.9	58.7	1400	7.2	0.3	640	7.9	0.9	320	10	2	40	2	10	2	8	1
9b9d197a-f1e7-42e9-baa9-b445814ef64c	23670-0L050	INDUTIVO	Injetor Hilux 3.0 2005 a 2010 095000-8290 (23670-0L050 /0L020)	1200	800	226	218	0	270	30	22	800	57	43	1400	9	5	300	5	3	360	22	3	30	5	13	3	8	2
\.


--
-- Data for Name: test; Type: TABLE DATA; Schema: public; Owner: aga2ocom_usr
--

COPY public.test (id, injector_number, sequence, description, comments, date, resistance, reactance, isolation, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name) FROM stdin;
20083407-0992-47a6-a57b-7dee04be98ae	2	1	Reparar (trocar solenoide)		2023-12-19	1090	0	25	89	0	35	0	101	0	50	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
46627762-e563-439a-8c11-58b850d062e7	1	1	Para reavaliação		2023-12-19	1140	0	1620	28	51	5	0	13	20	6.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
b98f63d9-6497-490b-97e4-565336efbeb1	2	1	Para reavaliação		2023-12-19	1110	0	1000	13	28	2.6	0	10	20	6	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
aa90209e-6a66-4b2a-9a13-fde426fd4281	3	1	Para reavaliação		2023-12-19	1140	0	1510	28	50	6	0	13	20	6.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
52bd32df-d729-4ff6-a49a-6833a33c661e	4	1	Para reavaliação		2023-12-19	1140	0	1100	28	50	5.4	0	13	18	6.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
04f70910-5a42-4c4a-8a68-5305a74d26c2	3	1	Diagnostico		2023-12-19	500	0	0.15	17	24	12	0	45	71	20	0	71e23d0a-da31-4e9f-afb5-484fe77798c3	6d01dd9d-b478-4473-82db-44288e37c27b	0efe035c-b935-410f-967d-dd416e2d1509		994	Henrique
7604dff3-33a0-416b-9b91-efd736cafd23	2	2	Para reavaliação		2023-12-20	1110	0	1000	25	54	4.5	0	29	50	11	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
2d5ae675-4faf-4b56-8b8a-51e25670fe3d	1	1	Possibilidade de regulagem		2023-12-19	350	0	26	22	33	12.6	0	8	10	5.6	0	71e23d0a-da31-4e9f-afb5-484fe77798c3	6d01dd9d-b478-4473-82db-44288e37c27b	0efe035c-b935-410f-967d-dd416e2d1509		994	Henrique
41ed9e24-abf6-4b66-b1d2-a55513c01a12	4	1	Diagnostico		2023-12-19	470	0	0.16	17	33	11.6	0	8	15	5.4	0	71e23d0a-da31-4e9f-afb5-484fe77798c3	6d01dd9d-b478-4473-82db-44288e37c27b	0efe035c-b935-410f-967d-dd416e2d1509		994	Henrique
9d3029ea-8821-4d8f-a536-ac7c1580dc81	2	1	Diagnostico		2023-12-19	460	0	0.15	23	32	15	0	18	38	10	0	71e23d0a-da31-4e9f-afb5-484fe77798c3	6d01dd9d-b478-4473-82db-44288e37c27b	0efe035c-b935-410f-967d-dd416e2d1509		994	Henrique
21c53b43-fcef-4ebd-bfdc-63482bf7701e	2	4	Para reavaliação		2023-12-21	1110	0	1000	28	47	8.8	0	13	18	6	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
a8d68a65-aafa-4d6b-ae80-a65a8e7001b5	2	3	Para reavaliação		2023-12-20	1110	0	1000	28	54	6.2	0	30	51	12.2	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
d4166cf9-b26a-47e8-91c7-7bf5c3cb8e16	1	1			2023-12-21	0	0	0	25	52	6.8	0	10	18	5.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466	1127391B00FE0000000000000000EA	985	Mec. Luke
e2054eb3-0ffd-45ae-890d-541299d82a57	3	1	Reparar		2023-12-19	1120	\N	1220	29	47	13.6	0	13	190	7.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
51ace0bc-641c-4b42-9e8e-d9c6ddc472be	3	2	Bico Substituido (Conceito)	Bico substituido (Conceito)	2023-12-21	1120	\N	1220	40	59	12	0	15	26	8	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
0e60df5e-8af5-4715-a7e5-be58abed90e8	5	1	Diagnostico		2023-12-19	450	0	0.18	24	34	15.4	0	12	13	5.2	0	71e23d0a-da31-4e9f-afb5-484fe77798c3	6d01dd9d-b478-4473-82db-44288e37c27b	0efe035c-b935-410f-967d-dd416e2d1509		994	Henrique
64e0c32e-59e9-42e1-9d0a-a6c9e3134b9e	6	1	Diagnostico - Debito e retorno estorado		2023-12-19	350	0	0.17	0	0	0	0	0	0	0	0	71e23d0a-da31-4e9f-afb5-484fe77798c3	6d01dd9d-b478-4473-82db-44288e37c27b	0efe035c-b935-410f-967d-dd416e2d1509		994	Henrique
06c5b1c1-0aad-4e50-8001-4ef7e1cad38f	4	2	Possibilidade de regulagem	Bico substituido (Conceito)	2023-12-21	1110	0	415	26	47	6.4	0	13	34	6.8	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
78ab4ca6-4af7-4f9b-b828-c6eb1034bb98	1	1	Bico Substituido (Conceito)		2023-12-19	1140	0	1220	21	41	5.4	0	12	19	5.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
87fcde25-c318-41de-afeb-38a7c1ea56ce	2	2	Reparar (trocar solenoide)	Bico substituido (Conceito)	2023-12-21	1090	0	25	27	53	6	0	12	21	6.2	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
c31a19b4-c868-4d0b-a2f6-54b32712973e	4	1	Possibilidade de regulagem	Bico substituido (Conceito)	2023-12-19	1110	0	415	28	47	8	0	13	20	6	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
efa6121b-f856-4f6e-99a1-8fb7290bb0ef	2	5	Para reavaliação		2023-12-21	1110	0	1000	28	56	5.2	0	13	25	6.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	5a0edad4-6cbf-440e-95c4-4da09a28a75b		965	Bodo de Caninde
50d1f4ed-fb94-4fef-9fdf-434773a0a74f	2	1			2023-12-21	0	0	0	25	43	6.6	0	12	20	6.8	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
430cd8b3-4f75-430f-b207-fb4734f550d4	3	1			2023-12-21	0	0	0	26	49	6	0	14	23	7	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
5913b339-bba4-4577-be16-ddbbbc976ba4	4	1			2023-12-21	0	0	0	26	49	7	0	12	20	6	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
a0c02f57-87c4-4f5d-b64b-2cf0f975ab67	1	2	Bico substituido (Conceito)	Bico substituido (Conceito)	2023-12-21	1140	0	1220	38	57	11	3	15	24	8	5	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	fdd5425c-ed66-4cfe-be8f-4dd4e409abf5		995	Tino
e95e2c99-42ca-44b3-9a58-dd74d9673ac4	3	2			2023-12-21	0	0	0	26	49	6	0	14	23	7	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
71fa0b7f-b7b6-45c3-9d1a-597da870af34	4	2			2023-12-21	0	0	0	26	49	7	0	12	20	6	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
35448740-1690-4457-933a-fd782399fc80	1	2			2023-12-21	0	0	0	27	53	6.8	0	11	17	5.4	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
d0e7fc6f-72ea-4543-8fd9-c9506fb6279a	2	2			2023-12-21	0	0	0	26	43	5.8	0	11	17	6	0	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	29a9dd15-7d24-4282-8399-882397b11466		985	Mec. Luke
ba0d602c-6b5a-4d3a-b0db-357686d455d6	1	1	Teste	Usando a pre do tete 021 Teste1	2023-12-28	1100	0	2200	27	49	5	4	13	21	6	5	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	bcb136b8-e982-41f7-8148-11847ae33097	11E80BF1E2E5C800000000000000CC	997	Valdenir
65bedd4d-14cf-4f00-815a-f9440cbda285	2	1			2023-12-28	1200	0	800	25	46	6.2	4	13	21	6.6	5	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	bcb136b8-e982-41f7-8148-11847ae33097	11E213F3F1E4DC00000000000000DA	997	Valdenir
19d19dbc-60a1-4816-b719-60f7a055a6b8	3	1			2023-12-28	1200	0	1360	27	46	6.7	4.6	13	20	6.5	5	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	bcb136b8-e982-41f7-8148-11847ae33097	11D900F3E7DFCA00000000000000C9	997	Valdenir
cbc1a769-5cf1-48b5-8921-024262308641	4	1			2023-12-28	1200	0	500	26	46	6.2	3.6	13	21	6.8	5.2	9b9d197a-f1e7-42e9-baa9-b445814ef64c	668853fb-81f1-46af-9562-3b0b5402a2e6	bcb136b8-e982-41f7-8148-11847ae33097	11EE2405F9F6E70000000000000036	997	Valdenir
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: aga2ocom_usr
--

COPY public.users (id, name, login, password, role) FROM stdin;
f8d1e2e0-739a-4af8-b72a-79044ccc03f0	Admin	admin@railcontrol.com	$2a$10$xDhFXJM95Ok4W2b9aLpoz.j5MZkml8IRPyshmR9zI9qdpYxV/mifu	ADMIN
2933d5c4-3b47-4355-acf9-b24e358740d1	Operador	oper@railcontrol.com	$2a$10$JFwfkqn3CH3zvuUC4M9VzuVBCpqrnCPE5Hi6JUz1LVeCrBvKlYZNa	OPERATOR
\.


--
-- Data for Name: vehicle; Type: TABLE DATA; Schema: public; Owner: aga2ocom_usr
--

COPY public.vehicle (id, plate, model, year_model, owner) FROM stdin;
5a0edad4-6cbf-440e-95c4-4da09a28a75b	HUP6G44	Hilux 3.0	2010/2010	Bodo de Caninde
fdd5425c-ed66-4cfe-be8f-4dd4e409abf5	HYO1H34	Hilux 3.0	2006/2007	Tino
0efe035c-b935-410f-967d-dd416e2d1509	AAA0101	Desconhecido	0000	Antonio
29a9dd15-7d24-4282-8399-882397b11466	HWW-6024	Hilux 3.0 SW4	2006/2006	Luke
bcb136b8-e982-41f7-8148-11847ae33097	NNE1J55	Hilux 3.0	2010	Valdenir
\.


--
-- Name: flyway_schema_history flyway_schema_history_pk; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.flyway_schema_history
    ADD CONSTRAINT flyway_schema_history_pk PRIMARY KEY (installed_rank);


--
-- Name: injector injector_model_key; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.injector
    ADD CONSTRAINT injector_model_key UNIQUE (model);


--
-- Name: injector injector_pkey; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.injector
    ADD CONSTRAINT injector_pkey PRIMARY KEY (id);


--
-- Name: plan plan_code_key; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.plan
    ADD CONSTRAINT plan_code_key UNIQUE (code);


--
-- Name: plan plan_pkey; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.plan
    ADD CONSTRAINT plan_pkey PRIMARY KEY (id);


--
-- Name: test test_pkey; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);


--
-- Name: users users_login_key; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_login_key UNIQUE (login);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: vehicle vehicle_pkey; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_pkey PRIMARY KEY (id);


--
-- Name: vehicle vehicle_plate_key; Type: CONSTRAINT; Schema: public; Owner: aga2ocom_usr
--

ALTER TABLE ONLY public.vehicle
    ADD CONSTRAINT vehicle_plate_key UNIQUE (plate);


--
-- Name: flyway_schema_history_s_idx; Type: INDEX; Schema: public; Owner: aga2ocom_usr
--

CREATE INDEX flyway_schema_history_s_idx ON public.flyway_schema_history USING btree (success);


--
-- PostgreSQL database dump complete
--

