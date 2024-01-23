import { Workshop } from "./workshop.model";


export class User {

    id = "";
	login = "";
	password = "";
	name = "";
	whatsapp = "";
	phone = "";
	workshop = new Workshop();
	role = "";

    constructor() {

    }

}