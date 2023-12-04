export class Plan {

    id: string = '';
	code: string = '';
	type: string = '';
	description: string = '';
	maxResistance: number = 0;
	minResistance: number = 0;
	maxInductance: number = 0;
	minInductance: number = 0;
	maxIsolation: number = 0;
	minIsolation: number = 0;
	maxHalfLoad: number = 0;
	minHalfLoad: number = 0;
	halfLoadPression: number = 0;
	maxFullLoad: number = 0;
	minFullLoad: number = 0;
	fullLoadPression: number = 0;
	maxIdling: number = 0;
	minIdling: number = 0;
	idlingPression: number = 0;
	maxPreInjection: number = 0;
	minPreInjection: number = 0;
	preInjectionPression: number = 0;
	maxHalfLoadReturn: number = 0;	
	minHalfLoadReturn: number = 0;	
	maxFullLoadReturn: number = 0;
	minFullLoadReturn: number = 0;	
	maxIdlingReturn: number = 0;	
	minIdlingReturn: number = 0;
	maxPreInjectionReturn: number = 0;
	minPreInjectionReturn: number = 0;

    constructor() {}
}