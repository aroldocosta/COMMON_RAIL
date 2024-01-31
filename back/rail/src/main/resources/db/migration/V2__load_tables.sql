-- Usuários
insert into workshop (id, name, description) 
values ('7654fedc-98ab-78a4-3be7-ab343d47a237', 'RECODIESEL', 'Descricao da oficina');

insert into workshop (id, name, description) 
values ('712bef41-68dc-44f7-9ca8-cb128d46b688', 'OFICINABR', 'Oficina de referência');

insert into users (id, name, login, password, role, workshop_id) 
values ('f8d1e2e0-739a-4af8-b72a-79044ccc03f0', 
	    'Aroldo Costa', 
	    'aroldocosta@yahoo.com.br', 
	    '$2a$10$xDhFXJM95Ok4W2b9aLpoz.j5MZkml8IRPyshmR9zI9qdpYxV/mifu', 
	    'ADMIN',
	    '712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into users (id, name, login, password, role, workshop_id) 
values ('b2a3d4e1-939d-76b6-b92d-99066aedc3d1', 
	    'Antonio Alves', 
	    'automacao.csi@gmail.com', 
	    '$2a$10$xDhFXJM95Ok4W2b9aLpoz.j5MZkml8IRPyshmR9zI9qdpYxV/mifu', 
	    'ADMIN',
	    '712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into users (id, name, login, password, role, workshop_id) 
values ('85ce4600-6855-4abb-8b43-56838af87df6', 
	    'Keuly', 
	    'keuly', 
	    '$2a$10$uIsOq96zZUVJtywrTFvEru/fKGin8P0Opzn4DyO4TD9nKeMFZeLZS', 
	    'OPERATOR',
	    '7654fedc-98ab-78a4-3be7-ab343d47a237'
);

 -- Veiculos
--insert into vehicle (id, plate, model, year_model, owner, workshop_id) values ('VCL1111', 'ABC1111', 'FORD 01', '2017/2018', 'Fulano de Tal', '712bef41-68dc-44f7-9ca8-cb128d46b688');
--insert into vehicle (id, plate, model, year_model, owner, workshop_id) values ('VCL2222', 'ABC2222', 'FORD 02', '2020/2020', 'Sicrano Silva', '712bef41-68dc-44f7-9ca8-cb128d46b688');
--insert into vehicle (id, plate, model, year_model, owner, workshop_id) values ('VCL3333', 'ABC3333', 'FORD 03', '2021/2022', 'Beltrano Costa', '712bef41-68dc-44f7-9ca8-cb128d46b688');
--insert into vehicle (id, plate, model, year_model, owner, workshop_id) values ('VCL4444', 'ABC4444', 'FORD 04', '2023/2023', 'Fulano Pereira', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('5a0edad4-6cbf-440e-95c4-4da09a28a75b', 'HUP6G44', 'Hilux 3.0', '2010/2010', 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');
insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', 'HYO1H34', 'Hilux 3.0', '2006/2007', 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');
insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('0efe035c-b935-410f-967d-dd416e2d1509', 'AAA0101', 'Desconhecido', '0000', 'Antonio', '712bef41-68dc-44f7-9ca8-cb128d46b688');
insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('29a9dd15-7d24-4282-8399-882397b11466', 'HWW-6024', 'Hilux 3.0 SW4', '2006/2006', 'Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');
insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('bcb136b8-e982-41f7-8148-11847ae33097', 'NNE1J55', 'Hilux 3.0', '2010', 'Valdenir', '712bef41-68dc-44f7-9ca8-cb128d46b688');
insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('eda40a18-f408-43b0-89df-47e75b03b81a', 'OCE-3827', 'Frontier 2.5 16V', '2008 a 2011	2011', 'Ze Nunes', '712bef41-68dc-44f7-9ca8-cb128d46b688');
insert into vehicle (id, plate, model, year_model, owner, workshop_id) values
('1a604fda-cff3-496f-a086-01b75581d726', 'NMR7J09', 'Frontier', '2009/2009', 'Bebeque', '712bef41-68dc-44f7-9ca8-cb128d46b688');

-- Injetores
insert into injector (id, model, plan_id, description, workshop_id) values ('668853fb-81f1-46af-9562-3b0b5402a2e6', '23670-0L050', '9b9d197a-f1e7-42e9-baa9-b445814ef64c', 'Injetor Hilux 3.0 2005 a 2010 095000-8290 (23670-0L050 /0L020)', '712bef41-68dc-44f7-9ca8-cb128d46b688');	
insert into injector (id, model, plan_id, description, workshop_id) values ('6d01dd9d-b478-4473-82db-44288e37c27b', '0445120007', '71e23d0a-da31-4e9f-afb5-484fe77798c3', 'Bico Injetor Cummins Isb 0445120007', '712bef41-68dc-44f7-9ca8-cb128d46b688');	
insert into injector (id, model, plan_id, description, workshop_id) values ('67b338fb-1ba7-4e55-9d09-8a31561ef0b3', '23670-0L090', 'ad32b942-474d-4f48-b5a6-b5cf6bc3311d', 'Bico Injetor 23670-0L090 Toyota Hilux', '712bef41-68dc-44f7-9ca8-cb128d46b688');	
insert into injector (id, model, plan_id, description, workshop_id) values ('361d69f0-2c05-4f2d-a9c9-65d7f9597d75', '16600-EB70A', '5074fdf8-205a-4bf8-a634-2621f9b4d8fb', 'Frontier 2.5  095000-6250   095000-6250 / 16600EB70D / 16600EC00A / 16600EB70A', '712bef41-68dc-44f7-9ca8-cb128d46b688'); 			 
																																																			
-- Planos
insert into plan (
	id,
	code,
	type,
	description,
	max_starting,
	min_starting,
	max_starting_return,
	min_starting_return,
	starting_pressure,
	starting_bench_rpm,
	starting_pulse_time,
	starting_frequency,
-- ------------------------	
	max_idling,
	min_idling,
	max_idling_return,
	min_idling_return,
	idling_pressure,
	idling_bench_rpm,
	idling_pulse_time,
	idling_frequency,
-- ------------------------	
	max_half_load,
	min_half_load,
	max_half_load_return,
	min_half_load_return,	
	half_load_pressure,
	half_load_bench_rpm,
	half_load_pulse_time,
	half_load_frequency,
-- ------------------------	
	max_full_load,
	min_full_load,
	max_full_load_return,
	min_full_load_return,
	full_load_pressure,
	full_load_bench_rpm,
	full_load_pulse_time,
	full_load_frequency,
-- ------------------------	
	max_pre_injection,
	min_pre_injection,
	max_pre_injection_return,
	min_pre_injection_return, 	
	pre_injection_pressure,
	pre_injection_bench_rpm,
	pre_injection_pulse_time,
	pre_injection_frequency,
-- ------------------------	
	workshop_id
) values (
	'71e23d0a-da31-4e9f-afb5-484fe77798c3',
	'0445120007',
	'INDUTIVO',
	'Bico Injetor Cummins Isb 0445120007',
-- ----- starting -----	
	9,
	6,
	10,
	2,
	300,
	450,
	1,
	400,
-- ------ idling ------	
	9,
	6,
	10,
	2,
	300,
	450,
	1,
	400,
-- ---- half load -----	
	28,
	18,
	15,
	3,
	800,
	1300,
	1,
	1000,		
-- ---- full load -----
	47,
	33,
	35,
	5,
	1400,
	1300,
	1,
	1500,
-- --- pre injection ---
	0,
	0,
	0,
	0,
	0,
	400,
	2,
	150,		
	'712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into plan (
	id,
	code,
	type,
	description,
	max_starting,
	min_starting,
	max_starting_return,
	min_starting_return,
	starting_pressure,
	starting_bench_rpm,
	starting_pulse_time,
	starting_frequency,
-- ------------------------	
	max_idling,
	min_idling,
	max_idling_return,
	min_idling_return,
	idling_pressure,
	idling_bench_rpm,
	idling_pulse_time,
	idling_frequency,
-- ------------------------	
	max_half_load,
	min_half_load,
	max_half_load_return,
	min_half_load_return,	
	half_load_pressure,
	half_load_bench_rpm,
	half_load_pulse_time,
	half_load_frequency,
-- ------------------------	
	max_full_load,
	min_full_load,
	max_full_load_return,
	min_full_load_return,
	full_load_pressure,
	full_load_bench_rpm,
	full_load_pulse_time,
	full_load_frequency,
-- ------------------------	
	max_pre_injection,
	min_pre_injection,
	max_pre_injection_return,
	min_pre_injection_return, 	
	pre_injection_pressure,
	pre_injection_bench_rpm,
	pre_injection_pulse_time,
	pre_injection_frequency,
-- ------------------------	
	workshop_id
) values (
	'ad32b942-474d-4f48-b5a6-b5cf6bc3311d',
	'23670-0L090',
	'INDUTIVO',
	'Bico Injetor 23670-0L090 Toyota Hilux',
-- ----- starting -----	
	7.2,
	0.3,
	10,
	2,
	640,
	450,
	1,
	400,
-- ------ idling ------	
	7.2,
	0.3,
	10,
	2,
	640,
	450,
	1,
	400,
-- ---- half load -----	
	14.5,
	5.3,
	10,
	2,
	1000,
	1300,
	1,
	1000,		
-- ---- full load -----
	84.9,
	58.7,
	40,
	2,
	1400,
	1300,
	1,
	1500,
-- --- pre injection ---
	7.9,
	0.9,
	8,
	1,
	320,
	400,
	2,
	150,		
	'712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into plan (
	id,
	code,
	type,
	description,
	max_starting,
	min_starting,
	max_starting_return,
	min_starting_return,
	starting_pressure,
	starting_bench_rpm,
	starting_pulse_time,
	starting_frequency,
-- ------------------------	
	max_idling,
	min_idling,
	max_idling_return,
	min_idling_return,
	idling_pressure,
	idling_bench_rpm,
	idling_pulse_time,
	idling_frequency,
-- ------------------------	
	max_half_load,
	min_half_load,
	max_half_load_return,
	min_half_load_return,	
	half_load_pressure,
	half_load_bench_rpm,
	half_load_pulse_time,
	half_load_frequency,
-- ------------------------	
	max_full_load,
	min_full_load,
	max_full_load_return,
	min_full_load_return,
	full_load_pressure,
	full_load_bench_rpm,
	full_load_pulse_time,
	full_load_frequency,
-- ------------------------	
	max_pre_injection,
	min_pre_injection,
	max_pre_injection_return,
	min_pre_injection_return, 	
	pre_injection_pressure,
	pre_injection_bench_rpm,
	pre_injection_pulse_time,
	pre_injection_frequency,
-- ------------------------	
	workshop_id
) values (
	'9b9d197a-f1e7-42e9-baa9-b445814ef64c',
	'23670-0L050',
	'INDUTIVO',
	'Injetor Hilux 3.0 2005 a 2010 095000-8290 (23670-0L050 /0L020)',
-- ----- starting -----	
	9,
	5,
	13,
	3,
	300,
	1300,
	1,
	1000,
-- ------ idling ------	
	9,
	5,
	13,
	3,
	300,
	1300,
	1,
	1000,
-- ---- half load -----	
	30,
	22,
	22,
	3,
	800,
	1300,
	1,
	1000,		
-- ---- full load -----
	57,
	43,
	30,
	5,
	1400,
	1300,
	1,
	1000,
-- --- pre injection ---
	5,
	3,
	8,
	2,
	360,
	1300,
	1,
	1000,		
	'712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into plan (
	id,
	code,
	type,
	description,
	max_starting,
	min_starting,
	max_starting_return,
	min_starting_return,
	starting_pressure,
	starting_bench_rpm,
	starting_pulse_time,
	starting_frequency,
-- ------------------------	
	max_idling,
	min_idling,
	max_idling_return,
	min_idling_return,
	idling_pressure,
	idling_bench_rpm,
	idling_pulse_time,
	idling_frequency,
-- ------------------------	
	max_half_load,
	min_half_load,
	max_half_load_return,
	min_half_load_return,	
	half_load_pressure,
	half_load_bench_rpm,
	half_load_pulse_time,
	half_load_frequency,
-- ------------------------	
	max_full_load,
	min_full_load,
	max_full_load_return,
	min_full_load_return,
	full_load_pressure,
	full_load_bench_rpm,
	full_load_pulse_time,
	full_load_frequency,
-- ------------------------	
	max_pre_injection,
	min_pre_injection,
	max_pre_injection_return,
	min_pre_injection_return, 	
	pre_injection_pressure,
	pre_injection_bench_rpm,
	pre_injection_pulse_time,
	pre_injection_frequency,
-- ------------------------	
	workshop_id
) values (
	'6e29eb40-aca3-49fb-b421-fc510e938c6d',
	'23670-0L020',
	'INDUTIVO',
	'Injetor Hilux 3.0 2005 a 2010 095000-8290 (23670-0L050 /0L020)   23670-0L050 /0L020',
-- ----- starting -----	
	18,
	14,
	12,
	8,
	300,
	1300,
	1,
	1000,
-- ------ idling ------	
	18,
	14,
	12,
	8,
	300,
	1300,
	1,
	1000,
-- ---- half load -----	
	30,
	22,
	22,
	3,
	800,
	1300,
	1,
	1000,		
-- ---- full load -----
	36,
	28,
	15,
	8,
	600,
	1300,
	1,
	1000,
-- --- pre injection ---
	4,
	1,
	12,
	4,
	800,
	1300,
	1,
	1000,		
	'712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into plan (
	id,
	code,
	type,
	description,
	max_starting,
	min_starting,
	max_starting_return,
	min_starting_return,
	starting_pressure,
	starting_bench_rpm,
	starting_pulse_time,
	starting_frequency,
-- ------------------------	
	max_idling,
	min_idling,
	max_idling_return,
	min_idling_return,
	idling_pressure,
	idling_bench_rpm,
	idling_pulse_time,
	idling_frequency,
-- ------------------------	
	max_half_load,
	min_half_load,
	max_half_load_return,
	min_half_load_return,	
	half_load_pressure,
	half_load_bench_rpm,
	half_load_pulse_time,
	half_load_frequency,
-- ------------------------	
	max_full_load,
	min_full_load,
	max_full_load_return,
	min_full_load_return,
	full_load_pressure,
	full_load_bench_rpm,
	full_load_pulse_time,
	full_load_frequency,
-- ------------------------	
	max_pre_injection,
	min_pre_injection,
	max_pre_injection_return,
	min_pre_injection_return, 	
	pre_injection_pressure,
	pre_injection_bench_rpm,
	pre_injection_pulse_time,
	pre_injection_frequency,
-- ------------------------	
	workshop_id
) values (
	'5074fdf8-205a-4bf8-a634-2621f9b4d8fb',
	'16600-EB70A',
	'INDUTIVO',
	'Frontier 2.5  095000-6250   095000-6250 / 16600EB70D / 16600EC00A / 16600EB70A',
-- ----- starting -----	
	21,
	15,
	14,
	7,
	300,
	1300,
	1,
	1000,
-- ------ idling ------	
	21,
	15,
	14,
	7,
	300,
	1300,
	1,
	1000,
-- ---- half load -----	
	78,
	68,
	26,
	18,
	950,
	1300,
	1,
	1000,		
-- ---- full load -----
	122,
	110,
	40,
	28,
	1200,
	1300,
	1,
	1000,
-- --- pre injection ---
	5,
	2,
	16,
	8,
	800,
	1300,
	1,
	1000,		
	'712bef41-68dc-44f7-9ca8-cb128d46b688'
);

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values 
('20083407-0992-47a6-a57b-7dee04be98ae', 2, 1, 'Reparar (trocar solenoide)', '', '2023-12-19', 0, 0, 89, 0, 35, 0, 101, 0, 50, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('46627762-e563-439a-8c11-58b850d062e7', 1, 1, 'Para reavaliação', '', '2023-12-19', 0, 0, 28, 51, 5, 0, 13, 20, 6.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('b98f63d9-6497-490b-97e4-565336efbeb1', 2, 1, 'Para reavaliação', '', '2023-12-19', 0, 0, 13, 28, 2.6, 0, 10, 20, 6, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('aa90209e-6a66-4b2a-9a13-fde426fd4281', 3, 1, 'Para reavaliação', '', '2023-12-19', 0, 0, 28, 50, 6, 0, 13, 20, 6.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('52bd32df-d729-4ff6-a49a-6833a33c661e', 4, 1, 'Para reavaliação', '', '2023-12-19', 0, 0, 28, 50, 5.4, 0, 13, 18, 6.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('04f70910-5a42-4c4a-8a68-5305a74d26c2', 3, 1, 'Diagnostico', '', '2023-12-19', 0, 0, 17, 24, 12, 0, 45, 71, 20, 0, '71e23d0a-da31-4e9f-afb5-484fe77798c3', '6d01dd9d-b478-4473-82db-44288e37c27b', '0efe035c-b935-410f-967d-dd416e2d1509', '', 994, 'Henrique', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('7604dff3-33a0-416b-9b91-efd736cafd23', 2, 2, 'Para reavaliação','', '2023-12-20', 0, 0, 25, 54, 4.5, 0, 29, 50, 11, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('2d5ae675-4faf-4b56-8b8a-51e25670fe3d', 1, 1, 'Possibilidade de regulagem', '', '2023-12-19', 0, 0, 0, 33, 12.6, 0, 8, 10, 5.6, 0, '71e23d0a-da31-4e9f-afb5-484fe77798c3', '6d01dd9d-b478-4473-82db-44288e37c27b', '0efe035c-b935-410f-967d-dd416e2d1509', '', 994, 'Henrique', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('41ed9e24-abf6-4b66-b1d2-a55513c01a12', 4, 1, 'Diagnostico', '', '2023-12-19', 0, 17, 33, 11.6, 0, 0, 8, 15, 5.4, 0, '71e23d0a-da31-4e9f-afb5-484fe77798c3', '6d01dd9d-b478-4473-82db-44288e37c27b', '0efe035c-b935-410f-967d-dd416e2d1509', '', 994, 'Henrique', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('9d3029ea-8821-4d8f-a536-ac7c1580dc81', 2, 1, 'Diagnostico', '', '2023-12-19', 0, 0, 23, 32, 15, 0, 18, 38, 10, 0, '71e23d0a-da31-4e9f-afb5-484fe77798c3', '6d01dd9d-b478-4473-82db-44288e37c27b', '0efe035c-b935-410f-967d-dd416e2d1509', '', 994, 'Henrique', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('21c53b43-fcef-4ebd-bfdc-63482bf7701e', 2, 4, 'Para reavaliação', '', '2023-12-21', 0, 0, 28, 47, 8.8, 0, 13, 18, 6, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('d4166cf9-b26a-47e8-91c7-7bf5c3cb8e16', 1, 1,'', '', '2023-12-21', 0, 0, 25, 52, 6.8, 0, 10, 18, 5.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466', '1127391B00FE0000000000000000EA', 985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('e2054eb3-0ffd-45ae-890d-541299d82a57', 3, 1, 'Reparar', '', '2023-12-19', 0, 0, 0, 0, 0, 0, 13, 190, 7.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('51ace0bc-641c-4b42-9e8e-d9c6ddc472be', 3, 2, 'Bico Substituido (Conceito)', 'Bico substituido (Conceito)', '2023-12-21', 0, 0, 40, 59, 12, 0, 15, 26, 8, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('0e60df5e-8af5-4715-a7e5-be58abed90e8', 5, 1, 'Diagnostico', '', '2023-12-19', 0, 0, 24, 34, 15.4, 0, 12, 13, 5.2, 0, '71e23d0a-da31-4e9f-afb5-484fe77798c3', '6d01dd9d-b478-4473-82db-44288e37c27b', '0efe035c-b935-410f-967d-dd416e2d1509', '', 994, 'Henrique', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('64e0c32e-59e9-42e1-9d0a-a6c9e3134b9e', 6, 1, 'Diagnostico - Debito e retorno estorado', '', '2023-12-19', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '71e23d0a-da31-4e9f-afb5-484fe77798c3', '6d01dd9d-b478-4473-82db-44288e37c27b', '0efe035c-b935-410f-967d-dd416e2d1509', '', 994, 'Henrique', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('06c5b1c1-0aad-4e50-8001-4ef7e1cad38f', 4, 2, 'Possibilidade de regulagem', 'Bico substituido (Conceito)', '2023-12-21', 0, 0, 26, 47, 6.4, 0, 13, 34, 6.8, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('78ab4ca6-4af7-4f9b-b828-c6eb1034bb98', 1, 1, 'Bico Substituido (Conceito)', '', '2023-12-19', 0, 0, 21, 41, 5.4, 0, 12, 19, 5.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('87fcde25-c318-41de-afeb-38a7c1ea56ce', 2, 2, 'Reparar (trocar solenoide)', 'Bico substituido (Conceito)', '2023-12-21', 0, 0, 27, 53, 6, 0, 12, 21, 6.2, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('c31a19b4-c868-4d0b-a2f6-54b32712973e', 4, 1, 'Possibilidade de regulagem', 'Bico substituido (Conceito)', '2023-12-19', 0, 0, 28, 47, 8, 0, 13, 20, 6, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('efa6121b-f856-4f6e-99a1-8fb7290bb0ef', 2, 5, 'Para reavaliação', '', '2023-12-21', 0, 0, 28, 56, 5.2, 0, 13, 25, 6.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('50d1f4ed-fb94-4fef-9fdf-434773a0a74f', 2, 1,'', '',  '2023-12-21', 0, 0, 25, 43, 6.6, 0, 12, 20, 6.8, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('430cd8b3-4f75-430f-b207-fb4734f550d4', 3, 1,'', '',  '2023-12-21', 0, 0, 26, 49, 6, 0, 14, 23, 7, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('5913b339-bba4-4577-be16-ddbbbc976ba4', 4, 1,'', '',  '2023-12-21', 0, 0, 26, 49, 7, 0, 12, 20, 6, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('a0c02f57-87c4-4f5d-b64b-2cf0f975ab67', 1, 2, 'Bico substituido (Conceito)', 'Bico substituido (Conceito)', '2023-12-21', 0, 0, 38, 57, 11, 3, 15, 24, 8, 5, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'fdd5425c-ed66-4cfe-be8f-4dd4e409abf5', '', 995, 'Tino', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('e95e2c99-42ca-44b3-9a58-dd74d9673ac4', 3, 2,'', '',  '2023-12-21', 0, 0, 26, 49, 6, 0, 14, 23, 7, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('71fa0b7f-b7b6-45c3-9d1a-597da870af34', 4, 2,'', '', '2023-12-21', 0, 0, 26, 49, 7, 0, 12, 20, 6, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('35448740-1690-4457-933a-fd782399fc80', 1, 2,'', '', '2023-12-21', 0, 0, 27, 53, 6.8, 0, 11, 17, 5.4, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('d0e7fc6f-72ea-4543-8fd9-c9506fb6279a', 2, 2,'', '', '2023-12-21', 0, 0, 26, 43, 5.8, 0, 11, 17, 6, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('ba0d602c-6b5a-4d3a-b0db-357686d455d6', 1, 1, 'Teste', 'Usando a pre do tete 021 Teste1', '2023-12-28', 0, 0, 27, 49, 5, 4, 13, 21, 6, 5, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'bcb136b8-e982-41f7-8148-11847ae33097', '11E80BF1E2E5C800000000000000CC', 997, 'Valdenir', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('65bedd4d-14cf-4f00-815a-f9440cbda285', 2, 1, '', '', '2023-12-28', 0, 0, 25, 46, 6.2, 4, 13, 21, 6.6, 5, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'bcb136b8-e982-41f7-8148-11847ae33097', '11E213F3F1E4DC00000000000000DA', 997, 'Valdenir', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('19d19dbc-60a1-4816-b719-60f7a055a6b8', 3, 1, '', '', '2023-12-28', 0, 0, 27, 46, 6.7, 4.6, 13, 20, 6.5, 5, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'bcb136b8-e982-41f7-8148-11847ae33097', '11D900F3E7DFCA00000000000000C9', 997, 'Valdenir', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('cbc1a769-5cf1-48b5-8921-024262308641', 4, 1, '', '',  '2023-12-28', 0, 0, 26, 46, 6.2, 3.6, 13, 21, 6.8, 5.2, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', 'bcb136b8-e982-41f7-8148-11847ae33097', '11EE2405F9F6E70000000000000036', 997, 'Valdenir', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('a8d68a65-aafa-4d6b-ae80-a65a8e7001b5', 2, 3, 'Para reavaliação', '', '2023-12-20', 0, 0, 28, 54, 6.2, 0, 30, 51, 12.2, 0, '9b9d197a-f1e7-42e9-baa9-b445814ef64c', '668853fb-81f1-46af-9562-3b0b5402a2e6', '5a0edad4-6cbf-440e-95c4-4da09a28a75b', '', 965, 'Bodo de Caninde', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('589d3d62-8918-470d-8579-3769568db347', 1, 3, '', '', '2024-01-11', 0, 0, 50.45, 122.118, 24.21, 4.4, 16.15, 35.35, 12.11, 11.11, '6e29eb40-aca3-49fb-b421-fc510e938c6d', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466', '1127391B00FE0000000000000000EA', 985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('47d895e9-d541-4704-9527-0dbd31c06ed6', 3, 1, '', '', '2024-01-10', 0, 0, 88, 150, 36, 0, 28, 44, 16, 0, '5074fdf8-205a-4bf8-a634-2621f9b4d8fb', '361d69f0-2c05-4f2d-a9c9-65d7f9597d75', '1a604fda-cff3-496f-a086-01b75581d726','',  1008, 'W B U Gomes', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('aa289128-c7c7-4974-8892-3a29569faf38', 4, 1, '', '', '2024-01-10', 0, 0, 66, 128, 44, 0, 20, 46, 16, 0, '5074fdf8-205a-4bf8-a634-2621f9b4d8fb', '361d69f0-2c05-4f2d-a9c9-65d7f9597d75', '1a604fda-cff3-496f-a086-01b75581d726','',  1008, 'W B U Gomes', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('db30dc14-c227-475e-96a4-c711955bc491', 2, 1, '', '', '2024-01-10', 0, 0, 84, 140, 36, 0, 32, 42, 16, 0, '5074fdf8-205a-4bf8-a634-2621f9b4d8fb', '361d69f0-2c05-4f2d-a9c9-65d7f9597d75', '1a604fda-cff3-496f-a086-01b75581d726','',  1008, 'W B U Gomes', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('0e53bdb7-26ae-4c2a-8766-e3e708f8c641', 1, 1, '', '', '2024-01-10', 0, 0, 100, 176, 43, 0, 30, 48, 17, 0, '5074fdf8-205a-4bf8-a634-2621f9b4d8fb', '361d69f0-2c05-4f2d-a9c9-65d7f9597d75', '1a604fda-cff3-496f-a086-01b75581d726','',  1008, 'W B U Gomes', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('c3ce3ddf-4d11-4916-826a-aae83453473b', 2, 3, '', '', '2024-01-11', 0, 0, 36, 88, 19, 15, 16, 40, 13, 13, '6e29eb40-aca3-49fb-b421-fc510e938c6d', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('3a0afb3b-fba2-4094-a86f-9fdbe64986b5', 3, 3, '', '', '2024-01-11', 0, 0, 26, 49, 6, 0, 14, 23, 7, 0, '6e29eb40-aca3-49fb-b421-fc510e938c6d', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');

insert into test (id, injector_number, sequence, description, comments, date, starting, starting_return, half_load, full_load, idling, pre_injection, half_load_return, full_load_return, idling_return, pre_injection_return, plan_id, injector_id, vehicle_id, ima_code, service_order, customer_name, workshop_id) values
('c5907129-8769-49e4-b5c1-6f3f237d6692', 4, 3, '', '', '2024-01-11', 0, 0, 26, 49, 7, 0, 12, 20, 6, 0, '6e29eb40-aca3-49fb-b421-fc510e938c6d', '668853fb-81f1-46af-9562-3b0b5402a2e6', '29a9dd15-7d24-4282-8399-882397b11466','',  985, 'Mec. Luke', '712bef41-68dc-44f7-9ca8-cb128d46b688');
