export class AboutPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/about-us';
    }
    render() {
        this.container.innerHTML = `<h1>About Page</h1>`
    }
}