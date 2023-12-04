CREATE TABLE users (
	id TEXT PRIMARY KEY UNIQUE NOT NULL,
	name TEXT NOT NULL, 
	login TEXT NOT NULL UNIQUE,
	password TEXT NOT NULL,
	role TEXT NOT NULL
);

CREATE TABLE vehicle (
	id BIGINT PRIMARY KEY UNIQUE NOT NULL,
	plate TEXT NOT NULL,
	model TEXT NOT NULL,
	owner_id NUMERIC NOT NULL
);

CREATE TABLE injector (
	id BIGINT PRIMARY KEY UNIQUE NOT NULL,
	code TEXT NOT NULL,
	model TEXT NOT NULL,
	vehicle_id NUMERIC
);

CREATE TABLE test (
	id BIGINT PRIMARY KEY UNIQUE NOT NULL,
	sequence NUMERIC NOT NULL,
	date TEXT NOT NULL,
	resistence NUMERIC,
	inductance NUMERIC,
	isolation NUMERIC,
	half_load NUMERIC,
	full_load NUMERIC,
	idling NUMERIC,
	half_load_return NUMERIC,
	full_load_return NUMERIC,
	idling_return NUMERIC,
	injector_id NUMERIC NOT NULL
);

CREATE TABLE plan (
	id BIGINT PRIMARY KEY UNIQUE NOT NULL,
	code TEXT NOT NULL,
	max_resistence NUMERIC,
	min_resistence NUMERIC,
	max_inductance NUMERIC,
	min_inductance NUMERIC,
	max_isolation NUMERIC,
	min_isolation NUMERIC,
	max_half_load NUMERIC,
	min_half_load NUMERIC,
	max_full_load NUMERIC,
	min_full_load NUMERIC,
	max_idling NUMERIC,
	min_idling NUMERIC
);


-- CREATE TABLE tank(
-- 	id BIGINT PRIMARY KEY UNIQUE NOT NULL,
-- 	name TEXT NOT NULL,
-- 	fuel TEXT NOT NULL,
-- 	tax NUMERIC NOT NULL,
-- 	unit_price NUMERIC NOT NULL
-- );
