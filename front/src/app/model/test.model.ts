import { Injector } from "@angular/core";

export class Test {

	id: string = '';
	sequence: number = 0;
	date: string = '';
	resistance: number = 0.0;
	inductance: number = 0.0;
	isolation: number = 0.0;
	halfLoad: number = 0.0;
	fullLoad: number = 0.0;
	idling: number = 0.0;
	preInjection: number = 0.0;
	halfLoadReturn: number = 0.0;
	fullLoadReturn: number = 0.0;
	idlingReturn: number = 0.0;
	preInjectionReturn: number = 0.0;
	injectorId: string = '';
	injectorCode: string = '';
	planId: string = '';
	vehicleId: string = '';
	vehiclePlate: string = '';
	imaCode: string = '';
	serviceOrder: string = '';

    constructor() {
		this.planId = '0';
		this.vehicleId = '0';
		this.injectorId = '0';
	}

}
