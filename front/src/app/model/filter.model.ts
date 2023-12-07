export class Filter {
    name: string = '';
    checked: boolean = false;

    constructor(name: string, checked: boolean) {
        this.name = name;
        this.checked = checked;
    }
}