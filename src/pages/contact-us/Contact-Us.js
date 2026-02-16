export class ContactUsPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/contactUs';
    }

    render() {
        this.container.innerHTML = `<h1>Contact Us Page</h1>`
    }
}