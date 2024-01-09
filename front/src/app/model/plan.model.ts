import { Workshop } from "./workshop.model";

export class Plan {

    id: string = '';
	code: string = '';
	type: string = '';
	description: string = '';
	maxResistance: string = '0.00';
	minResistance: string = '0.00';
	maxReactance: string = '0.00';
	minReactance: string = '0.00';
	maxIsolation: string = '0.00';
	minIsolation: string = '0.00';
	maxHalfLoad: string = '0.00';
	minHalfLoad: string = '0.00';
	halfLoadPressure: string = '0.00';
	maxFullLoad: string = '0.00';
	minFullLoad: string = '0.00';
	fullLoadPressure: string = '0.00';
	maxIdling: string = '0.00';
	minIdling: string = '0.00';
	idlingPressure: string = '0.00';
	maxPreInjection: string = '0.00';
	minPreInjection: string = '0.00';
	preInjectionPressure: string = '0.00';
	maxHalfLoadReturn: string = '0.00';	
	minHalfLoadReturn: string = '0.00';	
	maxFullLoadReturn: string = '0.00';
	minFullLoadReturn: string = '0.00';	
	maxIdlingReturn: string = '0.00';	
	minIdlingReturn: string = '0.00';
	maxPreInjectionReturn: string = '0.00';
	minPreInjectionReturn: string = '0.00';
	halfLoadBenchRpm: string = '0.00';
	halfLoadPulseTime: string = '0.00';
	halfLoadFrequency: string = '0.00';
	fullLoadBenchRpm: string = '0.00';
	fullLoadPulseTime: string = '0.00';
	fullLoadFrequency: string = '0.00';
	idlingBenchRpm: string = '0.00';
	idlingPulseTime: string = '0.00';
	idlingFrequency: string = '0.00';
	preInjectionBenchRpm: string = '0.00';
	preInjectionPulseTime: string = '0.00';
	preInjectionFrequency: string = '0.00';
	workshop: Workshop = new Workshop();

    constructor() {}
}