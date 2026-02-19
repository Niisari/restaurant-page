import './Navbar.css';
// Icons Imports
import closeIcon from '../../assets/images/icons/close-icon.svg';
import logo from '../../assets/images/logo.png';
// The Navbar class is responsible for rendering the navigation bar and handling user interactions
export class Navbar {
    constructor(onNavigate) {
        this.container = document.getElementById('header');
        this.activeLink = null;
        this.onNavigate = onNavigate;
    }
// Render the navbar HTML structure and set up event listeners
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
                    width="100"
                    height="auto"
                    />

                <ul class="nav__list">
                    <h2 class="nav__title">Welcome!</h2>
                    <li class="nav__item login"><a href="/coming-soon" class="nav__link">Login</a></li> 
                    <li class="nav__item sign__up"><a href="/coming-soon" class="nav__link">Sign Up</a></li> 

                    <h2 class="nav__title nav__title--secondary">VARXY STEAKHOUSE</h2>
                    <li class="nav__item"><a href="/" class="nav__link active">Home</a></li>
                    <li class="nav__item"><a href="/menu" class="nav__link">Menu</a></li>
                    <li class="nav__item"><a href="/about-us" class="nav__link">About Us</a></li>
                    <li class="nav__item"><a href="/contact-us" class="nav__link">Contact Us</a></li>

                    <div class="nav__socials">
                    <li>
                        <a href="#"><i class="fa-brands fa-facebook"></i>
                            <svg 
                            fill="var(--Cream-Ivory)" width="32" height="32" 
                            viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#"><i class="fa-brands fa-twitter"></i>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--Cream-Ivory)" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7828 3.91825C20.1313 3.83565 20.3743 3.75444 20.5734 3.66915C20.8524 3.54961 21.0837 3.40641 21.4492 3.16524C21.7563 2.96255 22.1499 2.9449 22.4739 3.11928C22.7979 3.29366 23 3.6319 23 3.99986C23 5.08079 22.8653 5.96673 22.5535 6.7464C22.2911 7.40221 21.9225 7.93487 21.4816 8.41968C21.2954 11.7828 20.3219 14.4239 18.8336 16.4248C17.291 18.4987 15.2386 19.8268 13.0751 20.5706C10.9179 21.3121 8.63863 21.4778 6.5967 21.2267C4.56816 20.9773 2.69304 20.3057 1.38605 19.2892C1.02813 19.0108 0.902313 18.5264 1.07951 18.109C1.25671 17.6916 1.69256 17.4457 2.14144 17.5099C3.42741 17.6936 4.6653 17.4012 5.6832 16.9832C5.48282 16.8742 5.29389 16.7562 5.11828 16.6346C4.19075 15.9925 3.4424 15.1208 3.10557 14.4471C2.96618 14.1684 2.96474 13.8405 3.10168 13.5606C3.17232 13.4161 3.27562 13.293 3.40104 13.1991C2.04677 12.0814 1.49999 10.5355 1.49999 9.49986C1.49999 9.19192 1.64187 8.90115 1.88459 8.71165C1.98665 8.63197 2.10175 8.57392 2.22308 8.53896C2.12174 8.24222 2.0431 7.94241 1.98316 7.65216C1.71739 6.3653 1.74098 4.91284 2.02985 3.75733C2.1287 3.36191 2.45764 3.06606 2.86129 3.00952C3.26493 2.95299 3.6625 3.14709 3.86618 3.50014C4.94369 5.36782 6.93116 6.50943 8.78086 7.18568C9.6505 7.50362 10.4559 7.70622 11.0596 7.83078C11.1899 6.61019 11.5307 5.6036 12.0538 4.80411C12.7439 3.74932 13.7064 3.12525 14.74 2.84698C16.5227 2.36708 18.5008 2.91382 19.7828 3.91825ZM10.7484 9.80845C10.0633 9.67087 9.12171 9.43976 8.09412 9.06408C6.7369 8.56789 5.16088 7.79418 3.84072 6.59571C3.86435 6.81625 3.89789 7.03492 3.94183 7.24766C4.16308 8.31899 4.5742 8.91899 4.94721 9.10549C5.40342 9.3336 5.61484 9.8685 5.43787 10.3469C5.19827 10.9946 4.56809 11.0477 3.99551 10.9046C4.45603 11.595 5.28377 12.2834 6.66439 12.5135C7.14057 12.5929 7.49208 13.0011 7.49986 13.4838C7.50765 13.9665 7.16949 14.3858 6.69611 14.4805L5.82565 14.6546C5.95881 14.7703 6.103 14.8838 6.2567 14.9902C6.95362 15.4727 7.65336 15.6808 8.25746 15.5298C8.70991 15.4167 9.18047 15.6313 9.39163 16.0472C9.60278 16.463 9.49846 16.9696 9.14018 17.2681C8.49626 17.8041 7.74425 18.2342 6.99057 18.5911C6.63675 18.7587 6.24134 18.9241 5.8119 19.0697C6.14218 19.1402 6.48586 19.198 6.84078 19.2417C8.61136 19.4594 10.5821 19.3126 12.4249 18.6792C14.2614 18.0479 15.9589 16.9385 17.2289 15.2312C18.497 13.5262 19.382 11.1667 19.5007 7.96291C19.51 7.71067 19.6144 7.47129 19.7929 7.29281C20.2425 6.84316 20.6141 6.32777 20.7969 5.7143C20.477 5.81403 20.1168 5.90035 19.6878 5.98237C19.3623 6.04459 19.0272 5.94156 18.7929 5.70727C18.0284 4.94274 16.5164 4.43998 15.2599 4.77822C14.6686 4.93741 14.1311 5.28203 13.7274 5.89906C13.3153 6.52904 13 7.51045 13 8.9999C13 9.28288 12.8801 9.5526 12.6701 9.74221C12.1721 10.1917 11.334 9.92603 10.7484 9.80845Z" fill="var(--Cream-Ivory)"/>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#"><i class="fa-brands fa-instagram"></i>
                        <svg width="30" height="30" viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:var(--Cream-Ivory);stroke-miterlimit:10;stroke-width:1.91px;}.cls-2{fill:var(--Cream-Ivory);}</style></defs><rect class="cls-1" x="1.5" y="1.5" width="21" height="21" rx="3.82"/><circle class="cls-1" cx="12" cy="12" r="4.77"/><circle class="cls-2" cx="18.2" cy="5.8" r="1.43"/></svg>
                        </a>
                    </li>
                    </div>
                </ul>

                <div class="nav__actions">
                    <a href="/coming-soon" class="nav__cart--link" aria-label="Cart">
                        <button class="nav__login--btn" aria-label="Login" type="button">
                            <svg 
                            width="25" 
                            height="25" 
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
                    </a>

                    <a href="/coming-soon">
                        <button class="nav__order--btn" aria-label="View cart" type="button">
                            <svg 
                            width="30" 
                            height="30" 
                            viewBox="0 0 24 24" 
                            fill="var(--Cream-Ivory)" 
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 8H17.1597C18.1999 8 19.0664 8.79732 19.1528 9.83391L19.8195 17.8339C19.9167 18.9999 18.9965 20 17.8264 20H6.1736C5.00352 20 4.08334 18.9999 4.18051 17.8339L4.84718 9.83391C4.93356 8.79732 5.80009 8 6.84027 8H8M16 8H8M16 8L16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7L8 8M16 8L16 12M8 8L8 12" 
                            stroke="var(--Light-Gray)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </a>
                </div>

            </nav>
        `;
        this.AddEventListeners();
        this.setupHamburgerToggle();
    }
// Add click event listeners to navigation links for active state management
AddEventListeners() {
    const links = this.container.querySelectorAll('.nav__link');
    
    // Select both the navbar and the list so we can close them
    const navbar = this.container.querySelector('.navbar');
    const navList = this.container.querySelector('.nav__list');

    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            // 1. Handle Visual Active State
            if (this.activeLink) {
                this.activeLink.classList.remove('active');
            }
            link.classList.add('active');
            this.activeLink = link;

            // 2. Trigger the Router
            const path = link.getAttribute('href'); 
            if (this.onNavigate) {
                this.onNavigate(path); 
            }

            // 3. THE FIX: Close the mobile menu fully
            navbar.classList.remove('navbar--open');
            navList.classList.remove('nav__list--open'); // 👈 Add this line!
        });
    });
}
// Set up the hamburger menu toggle functionality for mobile view
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
