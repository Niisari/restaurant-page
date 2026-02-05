import './Navbar.css';
import hamburgerIcon from '../../assets/images/icons/hamburger-menu.svg';
import logo from '../../assets/images/logo-dark.png';

export class Navbar {
    constructor() {
        this.container = document.getElementById('header');
        this.activeLink = null;
    }

    render() {
        this.container.innerHTML = `
            <nav class="navbar">

                <button class="menu__toggle" aria-label="Toggle menu" type="button">
                    <img 
                    src="${hamburgerIcon}" 
                    alt="" 
                    class="menu__icon"
                    width="40"
                    height="40"
                    />
                </button>

                <div class="nav__logo--container">
                    <img 
                    src="${logo}" 
                    alt="Logo" 
                    class="logo"
                    width="80"
                    height="80"
                    />
                </div>

                <ul class="nav__list">
                    <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                    <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                </ul>
            </nav>
        `;
        this.AddEventListeners();
        this.SetupMenuToggle();
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

    SetupMenuToggle() {
        const menuToggle = this.container.querySelector('.menu__toggle');
        const navList = this.container.querySelector('.nav__list');

        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('nav__list--open');
        });
    }
}
