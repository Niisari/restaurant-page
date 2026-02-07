import './Navbar.css';
import closeIcon from '../../assets/images/icons/close-icon.svg';
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

                    <svg 
                    class="menu__icon menu__icon--hamburger"
                    width="40" 
                    height="40" 
                    viewBox="0 -0.5 25 25" 
                    fill="var(--Cream-Ivory)" 
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 11.75C6.08579 11.75 5.75 12.0858 5.75 12.5C5.75 12.9142 6.08579 13.25 6.5 13.25V11.75ZM18.5 13.25C18.9142 13.25 19.25 12.9142 19.25 12.5C19.25 12.0858 18.9142 11.75 18.5 11.75V13.25ZM6.5 15.75C6.08579 15.75 5.75 16.0858 5.75 16.5C5.75 16.9142 6.08579 17.25 6.5 17.25V15.75ZM18.5 17.25C18.9142 17.25 19.25 16.9142 19.25 16.5C19.25 16.0858 18.9142 15.75 18.5 15.75V17.25ZM6.5 7.75C6.08579 7.75 5.75 8.08579 5.75 8.5C5.75 8.91421 6.08579 9.25 6.5 9.25V7.75ZM18.5 9.25C18.9142 9.25 19.25 8.91421 19.25 8.5C19.25 8.08579 18.9142 7.75 18.5 7.75V9.25ZM6.5 13.25H18.5V11.75H6.5V13.25ZM6.5 17.25H18.5V15.75H6.5V17.25ZM6.5 9.25H18.5V7.75H6.5V9.25Z" 
                    fill="var(--Cream-Ivory)"/>
                    </svg>

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
                        width="32" 
                        height="30" 
                        viewBox="0 0 32 32" 
                        enable-background="new 0 0 32 32" 
                        id="Stock_cut" version="1.1" 
                        xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc/>
                        <g>
                        <circle cx="16" cy="16" fill="none" r="15" stroke="var(--Cream-Ivory)" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                        <path d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0" fill="none" stroke="var(--Cream-Ivory)" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                        <circle cx="16" cy="11" fill="none" r="6" stroke="var(--Cream-Ivory)" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
                        </g>
                        </svg>
                    </button>

                    <button class="nav__order--btn" aria-label="View cart" type="button">
                        <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="var(--Cream-Ivory)" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" 
                        stroke="var(--Light-Gray)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
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
