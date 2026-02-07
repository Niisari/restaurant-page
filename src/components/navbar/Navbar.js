import './Navbar.css';
import hamburgerIcon from '../../assets/images/icons/hamburger-menu.svg';
import closeIcon from '../../assets/images/icons/close-icon.svg';
import cartIcon from '../../assets/images/icons/cart-icon.svg';
import loginIcon from '../../assets/images/icons/login-icon.svg';
import logo from '../../assets/images/logo.svg';

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
                        class="menu__icon menu__icon--hamburger"
                        width="40"
                        height="40"
                    />
                    <img 
                        src="${closeIcon}" 
                        alt="" 
                        class="menu__icon menu__icon--close"
                        width="40"
                        height="40"
                    />
                </button>

                    <img 
                    src="${logo}" 
                    alt="Logo" 
                    class="logo"
                    width="120"
                    height="60"
                    />

                <ul class="nav__list">
                    <h1 class="nav__title">Welcome!</h1>
                    <li class="nav__item"><a href="#home" class="nav__link active">Home</a></li>
                    <li class="nav__item"><a href="#menu" class="nav__link">Menu</a></li>
                    <li class="nav__item"><a href="#about" class="nav__link">About</a></li>
                    <li class="nav__item"><a href="#contact" class="nav__link">Contact</a></li>
                </ul>

                <div class="nav__actions">
                    <button class="nav__login--btn" aria-label="Login" type="button">
                        <svg 
                        width="30" 
                        height="30" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <circle fill="none" cx="12" cy="7" r="3"/>
                        <path d="M12 2C9.243 2 7 4.243 7 7s2.243 5 5 5 5-2.243 
                        5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 
                        3zm9 11v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h2v-1c0-2.757 2.243-5 5-5h4c2.757 0 5 2.243 5 5v1h2z"/>
                        </svg>
                    </button>

                    <button class="nav__order--btn" aria-label="View cart" type="button">
                        <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="var(--Cream-Ivory)" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

            </nav>
        `;
        this.AddEventListeners();
        this.setupHamburgerToggle();
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

    setupHamburgerToggle() {
        const toggleBtn = this.container.querySelector('.menu__toggle');
        const navbar = this.container.querySelector('.navbar');
        const navList = this.container.querySelector('.nav__list');

        toggleBtn.addEventListener('click', () => {
            navbar.classList.toggle('navbar--open');
            navList.classList.toggle('nav__list--open');
        });
    }
}
