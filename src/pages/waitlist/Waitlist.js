export class WaitlistPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/waitlist';
    }

    render() {
        this.container.innerHTML = `
            <h1>Waitlist</h1>`;
    }
}