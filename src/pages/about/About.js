export class AboutPage {
    constructor() {
        this.container = document.getElementById('main');
        this.link = '/about';
    }
    render() {
        return `<h1>About Page</h1>`; 
    }
}