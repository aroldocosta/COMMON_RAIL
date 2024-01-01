import { Workshop } from "./workshop.model";

export class Injector {

    id: string = '';
    type: string = '';
    planId: string = '';
    planCode: string = '';
    model: string = '';
    description: string = '';
    workshop: Workshop = new Workshop();
    
    constructor() {}
}