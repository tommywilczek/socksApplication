export class SockBase {
    // controlType = 'textbox'
    name: string;

    constructor(options: {
        name?: string
    } = {}) {
        this.name = options.name;
    }
}
