import './HomePage.css';
import { button } from '../../components/buttons/button.js';
import menu from '../../data/menuData.json';
// Images Imports
import OpeningIntro from '../../assets/images/opening-intro.png';
import premiumSteakIntro from '../../assets/images/premium-steak-intro.png';
import steakSaleIntro from '../../assets/images/steak-sale-intro.png';
import reservationBg from '../../assets/images/reservation-bg.png';

export class HomePage {
  constructor() {
    this.container = document.getElementById('main');
    this.link = '#home';
  }

    render() {
      // Featured Items
        const featuredCategories = ["category-starters", "hand-Cut-steaks", "Fall-Off-The-Bone-Ribs", "alabama-size-combos", "dockside-favorites", "chicken-specialties"];
        const categoriesToDisplay = menu.filter(cat => 
        featuredCategories.includes(cat.id));
      
      // Render Home Page
        this.container.innerHTML = 
        `<div class="home__page">

          <ul class="carousel">
            <li>
              <img src="${OpeningIntro}" alt="Opening Intro" />
            </li>
            <li>
              <img src="${premiumSteakIntro}" alt="Premium Steak Intro" />
            </li>
            <li>
              <img src="${steakSaleIntro}" alt="Steak Sale Intro" />
            </li>
          </ul>
          
          <section class="reservation">
            <div class="reservation__content">
              <div class="reservation__text">
                <h2 class="reservation__title">Make a reservation</h2>
                <a href="#reservation">${button('Book a table')}</a>
              </div>
              <img src="${reservationBg}" alt="">
              </div>
          </section>

          <section class="menu">
            <div class="menu__content">
              <h2 class="menu__title">Our Menu</h2>
              
              <div class="menu__preview--grid">
                  ${categoriesToDisplay.map(category => `
                      <div class="category__card" data-category-id="${category.id}">
                          <div class="category__image-container">
                              <img src="${category.categoryImage || 'default-category.jpg'}" alt="" />
                          </div>
                          <div class="category__info">
                              <h3>${category.categoryName}</h3>
                          </div>
                      </div>
                  `).join('')}
              </div>

              <div class="menu__action">
                  <a href="#menu" class="btn__menu--link">${button('View Full Menu')}</a>
              </div>
            </div>
          </section>

        </div>`;

        this.initCarousel();
    }

// Carousel Method to automatically scroll
initCarousel() {
  const carousel = this.container.querySelector('.carousel');
  const slides = carousel.children;
  let index = 0;

// Start and stop the carousel
    const startCarousel = () => {
      if (this.interval) return;

      this.interval = setInterval(() => {
        index = (index + 1) % slides.length;
        slides[index].scrollIntoView({
          behavior: 'smooth',
          inline: 'center'
        });
      }, 4000);
    };

    const stopCarousel = () => {
      clearInterval(this.interval);
      this.interval = null;
    };

    // Safety: clear old interval if re-rendered
    stopCarousel();

    // Observe visibility
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry.isIntersecting ? startCarousel() : stopCarousel();
      },
      { threshold: 0.5 } 
    );

    observer.observe(carousel);

    // Stop when tab is inactive
    document.addEventListener('visibilitychange', () => {
      document.hidden ? stopCarousel() : startCarousel();
    });

    // Stop carousel when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!carousel.contains(event.target)) {
        stopCarousel();
      } else {
        // If user clicks on carousel, restart
        startCarousel();
      }
    });
  }

}
