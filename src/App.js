// App.js
import { Navbar } from "./components/navbar/Navbar.js";
import { HomePage } from "./pages/home/HomePage.js";
import { MenuPage } from "./pages/menu/MenuPage.js"; 
import { AboutPage } from "./pages/about/About-us.js";
import { ContactUsPage } from "./pages/contact-us/Contact-us.js";
import { Footer } from "./components/footer/Footer.js";

export default class App {
    constructor() {
        this.mainContainer = document.getElementById('main');
        this.navbar = new Navbar(this.handleNavigation.bind(this)); // Pass the "changer" function
        this.footer = new Footer();
        
        this.routes = {
            '/': new HomePage(),
            '/menu': new MenuPage(),
            '/about-us': new AboutPage(),
            '/contact-us': new ContactUsPage()
        };
    }

    init() {
        // Handle the "Back" and "Forward" browser buttons
        window.onpopstate = () => this.renderPage(window.location.pathname);
        this.render();
    }

    handleNavigation(path) {
        window.history.pushState({}, "", path); // Update the URL without reloading
        this.renderPage(path);
    }

    renderPage(path) {
        this.mainContainer.innerHTML = ''; 
        const page = this.routes[path] || this.routes['/']; // Fallback to Home
        this.mainContainer.classList.add('page__fade--in');

        setTimeout(() => {
        this.mainContainer.innerHTML = '';
        this.mainContainer.classList.remove('page__fade--out');
        
        // 4. Render the new page
        page.render(this.mainContainer);
        
        // 5. Apply the fade-in class
        this.mainContainer.classList.add('page__fade--in');

        // 6. Cleanup: Remove the class after animation finishes so it can re-trigger next time
        setTimeout(() => {
            this.mainContainer.classList.remove('page__fade--in');
        }, 400); // Matches the 0.4s in CSS
        
        window.scrollTo(0, 0);
        }, 200);

        page.render(this.mainContainer);
        window.scrollTo(0, 0); 
    }

    render() {
        this.navbar.render(document.getElementById('header'));
        this.footer.render(document.getElementById('footer'));
        this.renderPage(window.location.pathname); // Render current URL on load
    }
}