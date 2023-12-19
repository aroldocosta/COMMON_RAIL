CREATE TABLE users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL, 
	login TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	role TEXT NOT NULL
);

CREATE TABLE vehicle (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	plate TEXT UNIQUE NOT NULL,
	model TEXT NOT NULL,
	year_model TEXT NOT NULL,
	owner TEXT NOT NULL
);

CREATE TABLE injector (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	model TEXT UNIQUE NOT NULL,
	plan_id TEXT NOT NULL,
	description TEXT
);

CREATE TABLE test (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	injector_number NUMERIC NOT NULL,
	sequence NUMERIC NOT NULL,
	description TEXT,
	comments TEXT,
	date TEXT NOT NULL,
	resistance NUMERIC,
	reactance NUMERIC,
	isolation NUMERIC,
	half_load NUMERIC,
	full_load NUMERIC,
	idling NUMERIC,
	pre_injection NUMERIC,
	half_load_return NUMERIC,
	full_load_return NUMERIC,
	idling_return NUMERIC,
	pre_injection_return NUMERIC,
	plan_id TEXT NOT NULL,
	injector_id TEXT NOT NULL,
	vehicle_id TEXT,
	ima_code TEXT,
	service_order TEXT,
	customer_name TEXT
);

CREATE TABLE plan (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	code TEXT UNIQUE NOT NULL,
	type TEXT NOT NULL,
	description TEXT,
	max_resistance NUMERIC,
	min_resistance NUMERIC,
	max_reactance NUMERIC,
	min_reactance NUMERIC,
	max_isolation NUMERIC,
	min_isolation NUMERIC,
	max_half_load NUMERIC,
	min_half_load NUMERIC,
	half_load_pressure NUMERIC,
	max_full_load NUMERIC,
	min_full_load NUMERIC,
	full_load_pressure NUMERIC,
	max_idling NUMERIC,
	min_idling NUMERIC,
	idling_pressure NUMERIC,
	max_pre_injection NUMERIC,
	min_pre_injection NUMERIC,
	pre_injection_pressure NUMERIC,
	max_half_load_return NUMERIC,
	min_half_load_return NUMERIC,
	max_full_load_return NUMERIC,
	min_full_load_return NUMERIC,
	max_idling_return NUMERIC,
	min_idling_return NUMERIC,
	max_pre_injection_return NUMERIC,
	min_pre_injection_return NUMERIC
);
