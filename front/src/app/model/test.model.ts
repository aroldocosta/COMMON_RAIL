import { Injector } from "@angular/core";

export class Test {

	id: string = '';
	injectorNumber: number = 0;
	sequence: string = '';
	description: string = '';
	comments: string = '';
	date: string = '';
	resistance: string = '0.00';
	reactance: string = '0.00';
	isolation: string = '0.00';
	halfLoad: string = '0.00';
	fullLoad: string = '0.00';
	idling: string = '0.00';
	preInjection: string = '0.00';
	halfLoadReturn: string = '0.00';
	fullLoadReturn: string = '0.00';
	idlingReturn: string = '0.00';
	preInjectionReturn: string = '0.00';
	injectorId: string = '';
	injectorType: string = '';
	injectorModel: string = '';
	planId: string = '';
	vehicleId: string = '';
	vehiclePlate: string = '';
	imaCode: string = '';
	serviceOrder: string = '';
	customerName: string = '';

    constructor() {
		this.planId = '0';
		this.vehicleId = '0';
		this.injectorId = '0';
	}

}
