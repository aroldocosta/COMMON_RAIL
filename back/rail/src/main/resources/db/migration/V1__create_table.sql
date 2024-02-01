CREATE TABLE IF NOT EXISTS users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL, 
	login TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	role TEXT NOT NULL,
	workshop_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS workshop (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL,
	logo TEXT,
	description TEXT 
);

CREATE TABLE IF NOT EXISTS vehicle (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	plate TEXT UNIQUE NOT NULL,
	model TEXT NOT NULL,
	year_model TEXT NOT NULL,
	owner TEXT NOT NULL,
	workshop_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS injector (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	model TEXT UNIQUE NOT NULL,
	plan_id TEXT NOT NULL,
	description TEXT,
	workshop_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS test (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	injector_number NUMERIC NOT NULL,
	sequence NUMERIC NOT NULL,
	description TEXT,
	comments TEXT,
	date TEXT NOT NULL,
	starting NUMERIC,
	starting_return NUMERIC,
	idling NUMERIC,
	idling_return NUMERIC,
	half_load NUMERIC,
	half_load_return NUMERIC,
	full_load NUMERIC,
	full_load_return NUMERIC,
	pre_injection NUMERIC,
	pre_injection_return NUMERIC,
	plan_id TEXT NOT NULL,
	injector_id TEXT NOT NULL,
	vehicle_id TEXT,
	ima_code TEXT,
	service_order TEXT,
	customer_name TEXT,
	workshop_id TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS plan (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	code TEXT UNIQUE NOT NULL,
	type TEXT NOT NULL,
	description TEXT,
	max_starting NUMERIC,
	min_starting NUMERIC,
	max_starting_return NUMERIC,
	min_starting_return NUMERIC,	
	starting_pressure NUMERIC,	
	starting_bench_rpm NUMERIC,
	starting_pulse_time NUMERIC,
	starting_frequency NUMERIC,	
-- -----------------------------------	
	max_idling NUMERIC,
	min_idling NUMERIC,
	max_idling_return NUMERIC,
	min_idling_return NUMERIC,
	idling_pressure NUMERIC,
	idling_bench_rpm NUMERIC,
	idling_pulse_time NUMERIC,
	idling_frequency NUMERIC,
-- -----------------------------------	
	max_half_load NUMERIC,
	min_half_load NUMERIC,
	max_half_load_return NUMERIC,
	min_half_load_return NUMERIC,
	half_load_pressure NUMERIC,
	half_load_bench_rpm NUMERIC,
	half_load_pulse_time NUMERIC,
	half_load_frequency NUMERIC,
-- -----------------------------------
	max_full_load NUMERIC,
	min_full_load NUMERIC,
	max_full_load_return NUMERIC,
	min_full_load_return NUMERIC,	
	full_load_pressure NUMERIC,
	full_load_bench_rpm NUMERIC,
	full_load_pulse_time NUMERIC,
	full_load_frequency NUMERIC,
-- -----------------------------------	
	max_pre_injection NUMERIC,
	min_pre_injection NUMERIC,
	max_pre_injection_return NUMERIC,
	min_pre_injection_return NUMERIC,	
	pre_injection_pressure NUMERIC,
	pre_injection_bench_rpm NUMERIC,
	pre_injection_pulse_time NUMERIC,
	pre_injection_frequency NUMERIC,
-- -----------------------------------	
	workshop_id TEXT NOT NULL
);
