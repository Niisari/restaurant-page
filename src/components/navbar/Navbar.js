import './Navbar.css';
import hamburgerIcon from '../../assets/images/icons/hamburger-menu.svg';
import closeIcon from '../../assets/images/icons/close-icon.svg';
import cartIcon from '../../assets/images/icons/cart-icon.svg';
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

                <button class="nav__order--btn" aria-label="View cart" type="button">
                    <img 
                        src="${cartIcon}" 
                        alt="Cart Icon" 
                        class="nav__order--icon"
                        width="40"
                        height="40"
                    />
                </button>
                
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
