import './Navbar.css';
import hamburgerIcon from '../../assets/images/icons/hamburger-menu.svg';

export class Navbar {
    constructor() {
        this.container = document.getElementById('header');
        this.activeLink = null;
    }

    render() {
        this.container.innerHTML = `
            <nav class="navbar">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav-link active">Home</a></li>
                    <li class="nav__item"><a href="#menu" class="nav-link">Menu</a></li>
                    <li class="nav__item"><a href="#about" class="nav-link">About</a></li>
                    <li class="nav__item"><a href="#contact" class="nav-link">Contact</a></li>
                </ul>
                <button class="menu__toggle" aria-label="Toggle menu" type="button">
                    <img 
                    src="${hamburgerIcon}" 
                    alt="" 
                    class="menu__icon"
                    width="40"
                    height="40"
                    />
                </button>
            </nav>
        `;
    }

    AddEventListeners() {
        const links = this.container.querySelectorAll('.nav__link');
        links.forEach((link) => {
            link.addEventListener('click', () => {
                if (this.activeLink) {
                    this.activeLink.classList.remove('active');
                }
                link.classList.add('active');
                this.activeLink = link;
            });
        });
    }
}
