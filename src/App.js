import { Navbar } from "./components/navbar/Navbar.js";
import { HomePage } from "./pages/home/HomePage.js";
import { Footer } from "./components/footer/Footer.js";

export default class App {
    constructor() {
        // We target the specific IDs from your template.html
        this.headerContainer = document.getElementById('header');
        this.mainContainer = document.getElementById('main');
        this.footerContainer = document.getElementById('footer');

        this.navbar = new Navbar();
        this.homePage = new HomePage();
        this.footer = new Footer();
    }

    init() {
        this.render();
    }

    render() {
        // Now we render EACH component into its own specific bucket
        if (this.headerContainer) this.navbar.render(this.headerContainer);
        if (this.mainContainer) this.homePage.render(this.mainContainer);
        if (this.footerContainer) this.footer.render(this.footerContainer);
    }
}