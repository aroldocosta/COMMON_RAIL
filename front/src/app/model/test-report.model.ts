import { Test } from "./test.model";

export class TestReport {

    customerName: string = '';
	serviceOrder: string = '';
	vehiclePlate: string = '';
	injectorModel: string = '';	
	injectorType: string = '';
	injectorQuantity: number = 0;
	testList: Test[] = [];

    constructor() {}
}