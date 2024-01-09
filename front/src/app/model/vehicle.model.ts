import { Workshop } from "./workshop.model";

export class Vehicle {
    id: string = '';
    plate: string = '';
    model: string = '';
    owner: string = '';
    yearModel: string = '';
    workshop: Workshop = new Workshop();
}