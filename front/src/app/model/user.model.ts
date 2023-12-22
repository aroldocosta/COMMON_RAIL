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

	isAdmin() {
		return true;
	}

	isDirector() {
		return true;
	}

	isManager() {
		return true;
	}

	isOperator() {
		return true;
	}

	hasLogoFile() {
		return true;
	}
}