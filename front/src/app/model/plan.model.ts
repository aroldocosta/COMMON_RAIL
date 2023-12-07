export class Plan {

    id: string = '';
	code: string = '';
	type: string = '';
	description: string = '';
	maxResistance: string = '0.00';
	minResistance: string = '0.00';
	maxInductance: string = '0.00';
	minInductance: string = '0.00';
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

    constructor() {}
}